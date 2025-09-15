import { PanelPlugin } from '@grafana/data';
import { ChatOptions } from './types';
import { ChatPanel } from './components/ChatPanel';

export const plugin = new PanelPlugin<ChatOptions>(ChatPanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'apiKey',
      name: 'API KEY',
      description: 'Set the API key for the chatbot',
      defaultValue: '',
    })
    .addBooleanSwitch({
      path: 'showTimestamp',
      name: 'Show Timestamp',
      description: 'Whether to display the timestamp of the message',
      defaultValue: true,
    })
    .addNumberInput({
      path: 'maxMessages',
      name: 'Max Messages',
      description: 'The maximum number of messages to keep in the chat history',
      defaultValue: 10,
      settings: {
        min: 10,
        max: 50,
      },
    })
});