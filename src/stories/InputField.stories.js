import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { InputField } from '../lib';

storiesOf('Form', module)
    .add('<InputField />', () => (
        <InputField
            id="input"
            label={text('Label', "")}
        />
    ));
