from injector import Binder, Module, provider, singleton
from langchain_openai_api_bridge.assistant import (
    ThreadRepository,
    MessageRepository,
    RunRepository,
)
from langchain_openai_api_bridge.core import AgentFactory

from ai_assistant_core.assistant.domain.user_info_service import (
    UserInfo,
    UserInfoService,
)
from ai_assistant_core.assistant.infrastructure.sqlalchemy_message_repository import (
    SqlalchemyMessageRepository,
)
from ai_assistant_core.assistant.infrastructure.sqlalchemy_run_repository import (
    SqlalchemyRunRepository,
)
from ai_assistant_core.assistant.infrastructure.sqlalchemy_thread_repository import (
    SqlalchemyThreadRepository,
)
from .domain.assistant_agent_factory import AssistantAgentFactory


class AssistantModule(Module):
    def configure(self, binder: Binder):
        binder.bind(ThreadRepository, to=SqlalchemyThreadRepository, scope=singleton)
        binder.bind(MessageRepository, to=SqlalchemyMessageRepository, scope=singleton)
        binder.bind(RunRepository, to=SqlalchemyRunRepository, scope=singleton)
        binder.bind(AgentFactory, to=AssistantAgentFactory)

    @provider
    def provide_user_info(self, service: UserInfoService) -> UserInfo:
        return service.get()
