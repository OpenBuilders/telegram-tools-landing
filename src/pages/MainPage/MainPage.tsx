import { TOOLS } from '@common';
import { Block, Icon, Image, List, ListItem, PageLayout, Text } from '@components';
import { useNavigate } from 'react-router-dom';
import { IconTypeName } from 'src/components/Icon/types';
import logoImage from '@assets/images/main.png';

export const MainPage = () => {
  const navigation = useNavigate();

  const handleNavigate = (link: string | null) => {
    if (!link) return;

    navigation(link);
  };

  return (
    <PageLayout center maxWidth={500}>
      <Image size={112} src={logoImage} />
      <Block margin="top" marginValue={16}>
        <Text type="title" align="center" weight="bold" color="primary">
          Telegram Tools
        </Text>
      </Block>
      <Block margin="top" marginValue={12}>
        <Text type="text" align="center" color="primary">
          An open-source toolkit by independent developers to extend what's possible with Telegram.
          Includes utilities and interfaces to automate, manage, and scale bots, channels, groups,
          and API workflows.
        </Text>
      </Block>
      <Block margin="top" marginValue={32}>
        <List header="Available Products" separatorLeftGap={40}>
          {TOOLS.map((tool) => {
            const isActive = !!tool.link;
            return (
              <ListItem
                noPointer={!isActive}
                key={tool.id}
                text={
                  <Text type="text" weight="medium">
                    {tool.name}
                  </Text>
                }
                description={
                  <Text type="caption2" color="tertiary">
                    {tool.description}
                  </Text>
                }
                label={isActive ? undefined : 'soon'}
                before={tool.icon && <Icon name={tool.icon as IconTypeName} size={44} />}
                onClick={() => handleNavigate(tool?.link)}
                chevron={isActive}
              />
            );
          })}
        </List>
      </Block>
    </PageLayout>
  );
};
