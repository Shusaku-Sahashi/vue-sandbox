import { storiesOf } from '@storybook/vue';
import CustomButton from "@/components/CustomButton";

storiesOf('TaskLaneItem', module).add('Default TaskLaneItem', () => ({
  components: {CustomButton},
  template: `<custom-button>This is Test</custom-button>`
}));
