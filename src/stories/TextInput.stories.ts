import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '../TextInput/TextInput';

// ✅ Required default export
const meta: Meta<typeof TextInput> = {
  title: 'UI/TextInput',
  component: TextInput,
  tags: ['autodocs'], // optional
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// ✅ Named exports for your stories
export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter name..',
    backgroundColor: 'red',
  },
};

export const AddressInput: Story = {
  args: {
    label: 'Address',
    placeholder: 'Enter address..',
    backgroundColor: 'green',
  },
};
