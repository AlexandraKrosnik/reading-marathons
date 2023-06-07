import { CaretRightOutlined } from '@ant-design/icons';
import Container from 'components/Container';
import { PanelStyle, CollapseStyle } from './GoalsCollapseList.styled';
import useGoalsCollapseList from './useGoalsCollapseList';

import GoalsTable from './GoalsTable/GoalsTable';

const GoalsCollapseList = () => {
  const {
    planTrainings,
    activeTrainings,
    finishedTrainings,
    PLAN,
    ACTIVE,
    FINISHED,
  } = useGoalsCollapseList();

  return (
    <Container>
      <CollapseStyle
        bordered={false}
        defaultActiveKey={['valid']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        {!!activeTrainings.length && (
          <PanelStyle header="Тривають" key="valid" data-status={ACTIVE}>
            <GoalsTable type={ACTIVE} dataSource={activeTrainings} />
          </PanelStyle>
        )}
        {!!planTrainings.length && (
          <PanelStyle header="Заплановані" data-status={PLAN}>
            <GoalsTable type={PLAN} dataSource={planTrainings} />
          </PanelStyle>
        )}
        {!!finishedTrainings.length && (
          <PanelStyle header="Завершені" data-status={FINISHED}>
            <GoalsTable type={FINISHED} dataSource={finishedTrainings} />
          </PanelStyle>
        )}
      </CollapseStyle>
    </Container>
  );
};

export default GoalsCollapseList;
