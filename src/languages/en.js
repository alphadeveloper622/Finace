/* eslint-disable max-len */
export default {
    common: {
        cancel: 'Cancel',
        yes: 'Yes',
        no: 'No',
        attachment: 'Attachment',
        to: 'To',
        optional: 'Optional',
        new: 'NEW',
        search: 'Search',
        next: 'Next',
        add: 'Add',
        resend: 'Resend',
        save: 'Save',
        password: 'Password',
        profile: 'Profile',
        payments: 'Payments',
        preferences: 'Preferences',
        view: 'View',
        not: 'Not',
        signIn: 'Sign In',
        continue: 'Continue',
        firstName: 'First Name',
        lastName: 'Last Name',
        phoneNumber: 'Phone Number',
        email: 'Email',
        and: 'and',
        details: 'Details',
        privacy: 'Privacy',
        privacyPolicy: 'Privacy Policy',
        delete: 'Delete',
        contacts: 'Contacts',
        recents: 'Recents',
        close: 'Close',
        saveAndContinue: 'Save & Continue',
        settings: 'Settings',
        termsOfService: 'Terms of Service',
        people: 'People',
        invite: 'Invite',
        here: 'here',
        dob: 'Date of Birth',
        ssnLast4: 'Last 4 Digits of SSN',
        addressNoPO: 'Address (no P.O. boxes)',
        companyAddressNoPO: 'Company Address (no P.O. boxes)',
        city: 'City',
        state: 'State',
        zip: 'Zip Code',
        isRequiredField: 'is a required field',
        whatThis: 'What\'s this?',
        iAcceptThe: 'I accept the ',
        passwordCannotBeBlank: 'Password cannot be blank',
        remove: 'Remove',
        admin: 'Admin',
        dateFormat: 'YYYY-MM-DD',
        send: 'Send',
        notifications: 'Notifications',
    },
    attachmentPicker: {
        cameraPermissionRequired: 'Camera Permission Required',
        expensifyDoesntHaveAccessToCamera: 'Expensify.cash does not have access to your camera, please enable the permission and try again.',
        attachmentError: 'Attachment Error',
        errorWhileSelectingAttachment: 'An error occurred while selecting an attachment, please try again',
        errorWhileSelectingCorruptedImage: 'An error occurred while selecting a corrupted attachment, please try another file',
        takePhoto: 'Take Photo',
        chooseFromGallery: 'Choose from Gallery',
        chooseDocument: 'Choose Document',
    },
    textInputFocusable: {
        noExtentionFoundForMimeType: 'No extension found for mime type',
        problemGettingImageYouPasted: 'There was a problem getting the image you pasted',
    },
    baseUpdateAppModal: {
        updateApp: 'Update App',
        updatePrompt: 'A new version of Expensify.cash is available.\nUpdate now or restart the app at a later time to download the latest changes.',
    },
    iOUConfirmationList: {
        whoPaid: 'WHO PAID?',
        whoWasThere: 'WHO WAS THERE?',
        whatsItFor: 'WHAT\'S IT FOR?',
    },
    iOUCurrencySelection: {
        selectCurrency: 'Select a Currency',
        allCurrencies: 'ALL CURRENCIES',
    },
    optionsSelector: {
        nameEmailOrPhoneNumber: 'Name, email, or phone number',
    },
    videoChatButtonAndMenu: {
        zoom: 'Zoom',
        googleMeet: 'Google Meet',
    },
    hello: 'Hello',
    phoneCountryCode: '1',
    welcomeText: {
        phrase1: 'With Expensify.cash, chat and payments are the same thing.',
        phrase2: 'Money talks. And now that chat and payments are in one place, it\'s also easy.',
        phrase3: 'Your payments get to you as fast as you can get your point across.',
    },
    reportActionCompose: {
        sendAttachment: 'Send Attachment',
        addAttachment: 'Add Attachment',
        writeSomething: 'Write something...',
        blockedFromConcierge: 'Communication is barred',
        youAppearToBeOffline: 'You appear to be offline.',
        fileUploadFailed: 'Upload Failed. File is not supported.',
    },
    reportActionContextMenu: {
        copyToClipboard: 'Copy to Clipboard',
        copied: 'Copied!',
        copyLink: 'Copy Link',
        markAsUnread: 'Mark as Unread',
        editComment: 'Edit Comment',
        deleteComment: 'Delete Comment',
        deleteConfirmation: 'Are you sure you want to delete this comment?',
    },
    reportActionsView: {
        beFirstPersonToComment: 'Be the first person to comment',
    },
    reportTypingIndicator: {
        isTyping: 'is typing...',
        areTyping: 'are typing...',
        multipleUsers: 'Multiple users',
    },
    sidebarScreen: {
        newChat: 'New Chat',
        newGroup: 'New Group',
        headerChat: 'Chats',
        buttonSearch: 'Search',
        buttonMySettings: 'My Settings',
        fabNewChat: 'New Chat(Floating Action)',
    },
    iou: {
        amount: 'Amount',
        participants: 'Participants',
        confirm: 'Confirm',
        splitBill: 'Split Bill',
        requestMoney: 'Request Money',
        pay: 'Pay',
        viewDetails: 'View Details',
        settleExpensify: 'Pay with Expensify',
        settleElsewhere: 'I\'ll settle up elsewhere',
        decline: 'Decline',
        settlePaypalMe: 'Pay with PayPal.me',
        settleVenmo: 'Pay with Venmo',
        request: ({amount}) => `Request ${amount}`,
        owes: ({manager, owner}) => `${manager} owes ${owner}`,
        paid: ({owner, manager}) => `${manager} paid ${owner}`,
        split: ({amount}) => `Split ${amount}`,
        choosePaymentMethod: 'Choose payment method:',
    },
    reportDetailsPage: {
        notificationPreferencesDescription: 'How often should we notify you when there are new messages to catch up on in this room?',
        always: 'Always',
        daily: 'Daily',
        mute: 'Mute',
        members: 'Members',
    },
    loginField: {
        addYourPhoneToSettleViaVenmo: 'Add your phone number to settle up via Venmo.',
        numberHasNotBeenValidated: 'The number has not yet been validated. Click the button to resend the validation link via text.',
        useYourPhoneToSettleViaVenmo: 'Use your phone number to settle up via Venmo.',
        emailHasNotBeenValidated: 'The email has not yet been validated. Click the button to resend the validation link via text.',
    },
    profilePage: {
        uploadPhoto: 'Upload Photo',
        removePhoto: 'Remove Photo',
        profile: 'Profile',
        editPhoto: 'Edit Photo',
        tellUsAboutYourself: 'Tell us about yourself, we would love to get to know you!',
        john: 'John',
        doe: 'Doe',
        preferredPronouns: 'Preferred Pronouns',
        selectYourPronouns: 'Select your pronouns',
        selfSelectYourPronoun: 'Self-select your pronoun',
        emailAddress: 'Email Address',
        setMyTimezoneAutomatically: 'Set my timezone automatically',
        timezone: 'Timezone',
        growlMessageOnSave: 'Your profile was successfully saved',
    },
    addSecondaryLoginPage: {
        addPhoneNumber: 'Add Phone Number',
        addEmailAddress: 'Add Email Address',
        enterPreferredPhoneNumberToSendValidationLink: 'Enter your preferred phone number and password to send a validation link.',
        enterPreferredEmailToSendValidationLink: 'Enter your preferred email address and password to send a validation link.',
        sendValidation: 'Send Validation',
    },
    initialSettingsPage: {
        about: 'About',
        aboutPage: {
            description: 'Expensify.cash is built by a community of open source developers from around the world. Come help us build the next generation of Expensify.',
            appDownloadLinks: 'App download links',
            viewTheCode: 'View the code',
            viewOpenJobs: 'View open jobs',
            reportABug: 'Report a bug',
        },
        appDownloadLinks: {
            android: {
                label: 'Android',
            },
            ios: {
                label: 'iOS',
            },
            desktop: {
                label: 'Desktop',
            },
        },
        signOut: 'Sign Out',
        versionLetter: 'v',
        changePassword: 'Change Password',
        readTheTermsAndPrivacyPolicy: {
            phrase1: 'Read the',
            phrase2: 'terms of service',
            phrase3: 'and',
            phrase4: 'privacy policy',
        },
    },
    passwordPage: {
        changePassword: 'Change Password',
        changingYourPasswordPrompt: 'Changing your password will update your password for both your Expensify.com\nand Expensify.cash accounts.',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        newPasswordPrompt: 'New password must be different than your old password, have at least 8 characters,\n1 capital letter, 1 lowercase letter, 1 number.',
        confirmNewPassword: 'Confirm New Password',
    },
    addPayPalMePage: {
        enterYourUsernameToGetPaidViaPayPal: 'Enter your username to get paid back via PayPal.',
        payPalMe: 'PayPal.me/',
        yourPayPalUsername: 'Your PayPal username',
        addPayPalAccount: 'Add PayPal Account',
        growlMessageOnSave: 'Your PayPal username was successfully added',
    },
    paymentMethodList: {
        addPaymentMethod: 'Add Payment Method',
        accountLastFour: 'Account ending in',
        cardLastFour: 'Card ending in',
    },
    preferencesPage: {
        mostRecent: 'Most Recent',
        mostRecentModeDescription: 'This will display all chats by default, sorted by most recent, with pinned items at the top',
        focus: '#focus',
        focusModeDescription: '#focus – This will only display unread and pinned chats, all sorted alphabetically.',
        receiveRelevantFeatureUpdatesAndExpensifyNews: 'Receive relevant feature updates and Expensify news',
        priorityMode: 'Priority Mode',
        language: 'Language',
        languages: {
            english: 'English',
            spanish: 'Spanish',
        },
    },
    signInPage: {
        expensifyDotCash: 'Expensify.cash',
        expensifyIsOpenSource: 'Expensify.cash is open source',
        theCode: 'the code',
        openJobs: 'open jobs',
    },
    termsOfUse: {
        phrase1: 'By logging in, you agree to the',
        phrase2: 'terms of service',
        phrase3: 'and',
        phrase4: 'privacy policy',
        phrase5: 'Money transmission is provided by Expensify Payments LLC (NMLS ID:2017010) pursuant to its',
        phrase6: 'licenses',
    },
    passwordForm: {
        pleaseFillOutAllFields: 'Please fill out all fields',
        forgot: 'Forgot?',
        twoFactorCode: 'Two Factor Code',
        requiredWhen2FAEnabled: 'Required when 2FA is enabled',
    },
    loginForm: {
        pleaseEnterEmailOrPhoneNumber: 'Please enter an email or phone number',
        phoneOrEmail: 'Phone or Email',
        enterYourPhoneOrEmail: 'Enter your phone or email:',
    },
    resendValidationForm: {
        linkHasBeenResent: 'Link has been re-sent',
        weSentYouMagicSignInLink: 'We\'ve sent you a magic sign in link – just click on it to log in!',
        resendLink: 'Resend Link',
    },
    detailsPage: {
        localTime: 'Local Time',
    },
    newGroupPage: {
        createGroup: 'Create Group',
    },
    notFound: {
        chatYouLookingForCannotBeFound: 'The chat you are looking for cannot be found.',
        getMeOutOfHere: 'Get me out of here',
    },
    setPasswordPage: {
        enterPassword: 'Enter a password',
        confirmNewPassword: 'Confirm the password',
        setPassword: 'Set Password',
        passwordsDontMatch: 'Passwords must match',
        newPasswordPrompt: 'Your password must have at least 8 characters,\n1 capital letter, 1 lowercase letter, 1 number.',
    },
    bankAccount: {
        accountNumber: 'Account Number',
        routingNumber: 'Routing Number',
        addBankAccount: 'Add Bank Account',
        chooseAnAccount: 'Choose an Account',
        logIntoYourBank: 'Log Into Your Bank',
        connectManually: 'Connect Manually',
        yourDataIsSecure: 'Your data is secure',
        toGetStarted: 'To get started with the Expensify Card, you first need to add a bank account.',
        plaidBodyCopy: 'Give your employees an easier way to pay - and get paid back - for company expenses.',
        checkHelpLine: 'Your routing number and account number can be found on a check for the account.',
        hasPhoneLoginError: 'To add a verified bank account please ensure your primary login is a valid email and try again. You can add your phone number as a secondary login.',
        hasBeenThrottledError: ({fromNow}) => `For security reasons, we're taking a break from bank account setup so you can double-check your company information. Please try again ${fromNow}. Sorry!`,
        error: {
            noBankAccountAvailable: 'Sorry, no bank account is available',
            taxID: 'Please enter a valid Tax ID Number',
            website: 'Please enter a valid website',
            zipCode: 'Please enter a valid zip code',
            addressStreet: 'Please enter a valid address street that is not a PO Box',
            incorporationDate: 'Please enter a valid incorporation date',
            incorporationState: 'Please enter a valid Incorporation State',
            industryCode: 'Please enter a valid industry classification code',
            restrictedBusiness: 'Please confirm company is not on the list of restricted businesses',
            routingNumber: 'Please enter a valid Routing Number',
            companyType: 'Please enter a valid Company Type',
            tooManyAttempts: 'Due to a high number of login attempts, this option has been temporarily disabled for 24 hours. Please try again later or manually enter details instead.',
            address: 'Please enter a valid address',
            dob: 'Please enter a valid date of birth',
            ssnLast4: 'Please enter valid last 4 digits of SSN',
        },
    },
    addPersonalBankAccountPage: {
        enterPassword: 'Enter password',
        alreadyAdded: 'This account has already been added.',
    },
    attachmentView: {
        unknownFilename: 'Unknown Filename',
    },
    pronouns: {
        heHimHis: 'He/him',
        sheHerHers: 'She/her',
        theyThemTheirs: 'They/them',
        zeHirHirs: 'Ze/hir',
        selfSelect: 'Self-select',
        callMeByMyName: 'Call me by my name',
    },
    cameraPermissionsNotGranted: 'Camera permissions not granted',
    messages: {
        noPhoneNumber: 'Please enter a phone number including the country code e.g +447814266907',
        maxParticipantsReached: 'You\'ve reached the maximum number of participants for a group chat.',
    },
    onfidoStep: {
        acceptTerms: 'By continuing with the request to activate your Expensify wallet, you confirm that you have read, understand and accept ',
        facialScan: 'Onfido’s Facial Scan Policy and Release',
        tryAgain: 'Try Again',
        verifyIdentity: 'Verify Identity',
        genericError: 'There was an error while processing this step. Please try again.',
    },
    additionalDetailsStep: {
        headerTitle: 'Additional Details',
        helpText: 'We need to confirm the following information before we can process this payment.',
        helpLink: 'Learn more about why we need this.',
        legalFirstNameLabel: 'Legal First Name',
        legalMiddleNameLabel: 'Legal Middle Name',
        legalLastNameLabel: 'Legal Last Name',
    },
    termsStep: {
        headerTitle: 'Terms and Fees',
        haveReadAndAgree: 'I have read and agree to receive ',
        electronicDisclosures: 'electronic disclosures',
        agreeToThe: 'I agree to the ',
        walletAgreement: 'Wallet Agreement',
        enablePayments: 'Enable Payments',
        termsMustBeAccepted: 'Terms must be accepted',
    },
    activateStep: {
        headerTitle: 'Enable Payments',
        activated: 'Your Expensify Wallet is ready to use.',
        checkBackLater: 'We\'re still reviewing your information. Please check back later.',
    },
    companyStep: {
        headerTitle: 'Company Information',
        subtitle: 'Provide more information about your company.',
        legalBusinessName: 'Legal Business Name',
        companyWebsite: 'Company Website',
        taxIDNumber: 'Tax ID Number',
        companyType: 'Company Type',
        incorporationDate: 'Incorporation Date',
        industryClassificationCode: 'Industry Classification Code',
        confirmCompanyIsNot: 'I confirm that this company is not on the',
        listOfRestrictedBusinesses: 'list of restricted businesses',
        incorporationDatePlaceholder: 'Start date (yyyy-mm-dd)',
        companyPhonePlaceholder: '10 digits, no hyphens',
    },
    requestorStep: {
        headerTitle: 'Requestor Information',
        financialRegulations: 'Financial regulation and bank rules require us to validate the identity of any individual setting up bank accounts on behalf of a company. ',
        learnMore: 'Learn More',
        isMyDataSafe: 'Is my data safe?',
        onFidoConditions: 'By continuing with the request to add this bank account, you confirm that you have read, understand and accept ',
        onFidoFacialScan: 'Onfido’s Facial Scan Policy and Release',
        isControllingOfficer: 'I am authorized to use my company bank account for business spend',
        isControllingOfficerError: 'You must be a controlling officer with authorization to operate the business bank account.',
    },
    validationStep: {
        headerTitle: 'Validate',
        buttonText: 'Finish Setup',
        maxAttemptError: 'Validation for this bank account has been disabled due to too many incorrect attempts. Please contact us.',
        description: 'A day or two after you add your account to Expensify we send three (3) transactions to your account. They have a merchant line like "Expensify, Inc. Validation"',
        descriptionCTA: 'Please enter each transaction amount in the fields below. Example: 1.51',
        verifyingDescription: 'We\'re taking a look at your information and will have you onto next steps in just a few seconds.',
    },
    beneficialOwnersStep: {
        beneficialOwners: 'Beneficial Owners',
        additionalInformation: 'Additional Information',
        checkAllThatApply: '(check all that apply, otherwise leave blank)',
        iOwnMoreThan25Percent: 'I own more than 25% of ',
        someoneOwnsMoreThan25Percent: 'Somebody else owns more than 25% of ',
        additionalOwner: 'Additional Beneficial Owner',
        removeOwner: 'Remove this beneficial owner',
        addAnotherIndividual: 'Add another individual who owns more than 25% of ',
        agreement: 'Agreement:',
        termsAndConditions: 'terms and conditions',
        certifyTrueAndAccurate: 'I certify that the information provided is true and accurate',
        error: {
            termsAndConditions: 'Must accept terms and conditions',
            certify: 'Must certify information is true and accurate',
        },
    },
    session: {
        offlineMessage: 'Looks like you\'re not connected to internet. Can you check your connection and try again?',
    },
    workspace: {
        common: {
            card: 'Expensify Card',
            workspace: 'Workspace',
        },
        new: {
            newWorkspace: 'New Workspace',
            getTheExpensifyCardAndMore: 'Get the Expensify Card and more',
            welcome: 'Welcome',
            chooseAName: 'Choose a name',
            helpText: 'Name your Workspace before enabling your Expensify Cards!',
            getStarted: 'Get started!',
            genericFailureMessage: 'An error occurred creating the workspace, please try again.',
        },
        people: {
            assignee: 'Assignee',
            genericFailureMessage: 'An error occurred removing a user from the workspace, please try again.',
            removeMembersPrompt: 'Are you sure you want to remove the selected people from your workspace?',
            removeMembersTitle: 'Remove Members',
        },
        card: {
            addEmail: 'Add Email',
            tagline: 'The Smartest corporate card in the room.',
            publicCopy: 'In order to use the Expensify Card you must use your company\'s private domain. Go ahead and add your private email address as a secondary login.',
            privateCopy: 'Just swipe your Expensify card and your expenses are done, its that simple!',
            getStarted: 'Get Started',
            manageCards: 'Manage Cards',
            cardReadyTagline: 'Your Expensify Cards are ready to go!',
        },
        invite: {
            invitePeople: 'Invite People',
            invitePeoplePrompt: 'Invite a colleague to your workspace.',
            personalMessagePrompt: 'Add a Personal Message (Optional)',
            enterEmailOrPhone: 'Email or Phone',
            pleaseEnterValidLogin: 'Please ensure the email or phone number is valid (e.g. +15005550006).',
            genericFailureMessage: 'An error occurred inviting the user to the workspace, please try again.',
            welcomeNote: ({workspaceName}) => `You have been invited to the ${workspaceName} Workspace! Download the Expensify mobile App to start tracking your expenses.`,
        },
    },
    requestCallPage: {
        requestACall: 'Request a Call',
        description: 'Need help with your account configuration? Our team of guides are on hand to help you each step of the way.',
        instructions: 'Type in your name and phone number, and we’ll give you a call back.',
        availabilityText: '*Our guides are available from Sunday at 5pm CT to Friday at 5pm CT. Any requests outside this window will be returned 9am - 5pm, Monday - Friday in your local time. Call time is based on the order the call was received.',
        callMe: 'Call Me',
        growlMessageOnSave: 'Call requested.',
        growlMessageInvalidPhone: 'That doesn’t look like a valid phone number. Try again with the country code.\ne.g. +15005550006',
        growlMessageEmptyName: 'Please provide both a first and last name so our Guides know how to address you!',
    },
};
