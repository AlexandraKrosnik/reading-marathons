import { CaretRightOutlined } from '@ant-design/icons';
import Container from 'components/Container';
import { PanelStyle, CollapseStyle } from './GoalsCollapseList.styled';
import useGoalsCollapseList from './useGoalsCollapseList';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const GoalsCollapseList = () => {
  const color = 'data-green';
  const { data } = useGoalsCollapseList();

  return (
    <Container>
      <CollapseStyle
        bordered={false}
        defaultActiveKey={['valid']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        <PanelStyle header="Тривають" key="valid" data-status="ongoing">
          <p>{text}</p>
        </PanelStyle>
        <PanelStyle header="Заплановані" data-status="upcoming">
          <p>{text}</p>
        </PanelStyle>
        <PanelStyle header="Завершені" data-status="finished">
          <p>{text}</p>
        </PanelStyle>
      </CollapseStyle>
    </Container>
  );
};

export default GoalsCollapseList;
