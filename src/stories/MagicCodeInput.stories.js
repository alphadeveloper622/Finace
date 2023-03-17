import React from 'react';
import MagicCodeInput from '../components/MagicCodeInput';

/**
 * We use the Component Story Format for writing stories. Follow the docs here:
 *
 * https://storybook.js.org/docs/react/writing-stories/introduction#component-story-format
 */
const story = {
    title: 'Components/MagicCodeInput',
    component: MagicCodeInput,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = args => <MagicCodeInput {...args} />;

// Arguments can be passed to the component by binding
// See: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const AutoFocus = Template.bind({});
AutoFocus.args = {
    label: 'Auto-focused magic code input',
    name: 'AutoFocus',
    autoFocus: true,
};

const SubmitOnComplete = Template.bind({});
SubmitOnComplete.args = {
    label: 'Submits when the magic code input is complete',
    name: 'SubmitOnComplete',
    submitOnComplete: true,
    onSubmit: () => console.debug('Submitted!'),
};

export default story;
export {
    AutoFocus,
    SubmitOnComplete,
};
