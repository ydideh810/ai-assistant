import { Section } from '@/components/section';
import { ConfigurationKvEditor } from './configuration-kv-editor';


export default function ApiKeysSection() {
  return (
    <Section title="API Keys">
      <ConfigurationKvEditor kv_key="OPENAI_API_KEY"/>
      <ConfigurationKvEditor kv_key="ANTHROPIC_API_KEY"/>
      <ConfigurationKvEditor kv_key="SERPER_API_KEY"/>
    </Section>
  );
}
