const {promisify} = require('util');
const exec = promisify(require('child_process').exec);
const fs = require('fs');
const getMajorVersion = require('semver/functions/major');
const getMinorVersion = require('semver/functions/minor');
const getPatchVersion = require('semver/functions/patch');
const getBuildVersion = require('semver/functions/prerelease');

// Promisified version of fs.readFile
const readFileAsync = promisify(fs.readFile);

// Filepath constants
const BUILD_GRADLE_PATH = './android/app/build.gradle';
const PLIST_PATH = './ios/ExpensifyCash/Info.plist';
const PLIST_PATH_TEST = './ios/ExpensifyCashTests/Info.plist';

/**
 * Pad a number to be three digits (with leading zeros if necessary).
 *
 * @param {Number} number - Must be an integer.
 * @returns {String} - A string representation of the number w/ length 3.
 */
function padToThreeDigits(number) {
    if (number >= 100) {
        return number.toString();
    }
    if (number >= 10) {
        return `0${number.toString()}`;
    }
    return `00${number.toString()}`;
}

/**
 * Generate the 12-digit versionCode for android.
 * This version code allocates three digits each for MAJOR, MINOR, PATCH, and BUILD versions.
 * As a result, our max version is 999.999.999-999.
 *
 * @param {String} npmVersion
 * @returns {String}
 */
exports.generateAndroidVersionCode = function generateAndroidVersionCode(npmVersion) {
    return ''.concat(
        padToThreeDigits(getMajorVersion(npmVersion) || 0),
        padToThreeDigits(getMinorVersion(npmVersion) || 0),
        padToThreeDigits(getPatchVersion(npmVersion) || 0),
        padToThreeDigits(getBuildVersion(npmVersion) || 0),
    );
};

/**
 * Update the Android app version.
 *
 * @param {String} versionName
 * @param {String} versionCode
 * @returns {Promise}
 */
exports.updateAndroidVersion = function updateAndroidVersion(versionName, versionCode) {
    console.log('Updating android:', `versionName: ${versionName}`, `versionCode: ${versionCode}`);
    return readFileAsync(BUILD_GRADLE_PATH, {encoding: 'utf8'})
        .then((content) => {
            let updatedContent = content.replace(/versionName "([0-9.-]*)"/, `versionName "${versionName}"`);
            updatedContent = updatedContent.replace(/versionCode ([0-9]*)/, `versionCode ${versionCode}`);
            fs.writeFile(BUILD_GRADLE_PATH, updatedContent, () => {});
        });
};

/**
 * Update the iOS app version.
 *
 * @param {String} version
 * @returns {Promise}
 */
exports.updateiOSVersion = function updateiOSVersion(version) {
    const shortVersion = version.split('-')[0];
    console.log('Updating iOS', `CFBundleShortVersionString: ${shortVersion}`, `CFBundleVersion: ${version}`);
    return Promise.all([
        exec(`/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${shortVersion}" ${PLIST_PATH}`),
        exec(`/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${shortVersion}" ${PLIST_PATH_TEST}`),
        exec(`/usr/libexec/PlistBuddy -c "Set :CFBundleVersion ${version}" ${PLIST_PATH}`),
        exec(`/usr/libexec/PlistBuddy -c "Set :CFBundleVersion ${version}" ${PLIST_PATH_TEST}`),
    ]);
};
