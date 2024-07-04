'use client';
import { useErrorNotification } from '@/app/_components/use-error-notification';
import Chat from '@/components/chat';
import { useCurrentModel } from '@/lib/use-current-model';
import { useOpenAiAssistant } from '@/lib/use-openai-assistant';


interface Props {
  threadId?: string
}

export default function AssistantThread({ threadId }: Props) {
  const { data: model } = useCurrentModel();
  const { status, messages, error, input, submitMessage, handleInputChange } = useOpenAiAssistant({ threadId, model });
  useErrorNotification(error);

  const isLoading = status === 'in_progress';

  return (
    <Chat
      messages={messages}
      isLoading={isLoading}
      input={input}
      onChange={handleInputChange}
      onSubmit={submitMessage}
    />
  );
}