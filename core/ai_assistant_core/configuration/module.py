from injector import Binder, Module

from .infra.sqlalchemy_repository import SqlalchemyConfigurationRepository
from .domain.repository import ConfigurationRepository


class ConfigurationModule(Module):
    def configure(self, binder: Binder):
        binder.bind(ConfigurationRepository, to=SqlalchemyConfigurationRepository)
