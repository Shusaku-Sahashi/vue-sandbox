import { storiesOf } from '@storybook/vue';
import CustomButton from "@/components/atoms/CustomButton";
import Modal from "@/components/molecules/Modal";

storiesOf('TaskLaneItem', module).add('Default TaskLaneItem', () => ({
  components: {CustomButton},
  template: `<custom-button>This is Test</custom-button>`
}));


storiesOf('Modal', module).add('Modal', () => ({
  components: {Modal},
  template: `<modal></modal>`
}));
