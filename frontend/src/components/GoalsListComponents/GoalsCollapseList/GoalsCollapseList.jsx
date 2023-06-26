import { CaretRightOutlined } from '@ant-design/icons';
import Container from 'components/Container';
import { PanelStyle, CollapseStyle } from './GoalsCollapseList.styled';
import useGoalsCollapseList from './useGoalsCollapseList';

import GoalsTable from './GoalsTable/GoalsTable';
import { Empty } from 'antd';

const GoalsCollapseList = () => {
  const {
    planTrainings,
    activeTrainings,
    finishedTrainings,
    PLAN,
    ACTIVE,
    FINISHED,
    data,
  } = useGoalsCollapseList();

  return (
    <Container>
      {data?.trainings.length === 0 && (
        <Empty
          description={
            <span>
              Тут поки пусто.
              <br /> Додай свою першу ціль!
            </span>
          }
        />
      )}
      <CollapseStyle
        bordered={false}
        defaultActiveKey={['active', 'plan']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        {!!activeTrainings.length && (
          <PanelStyle header="Тривають" key="active" data-status={ACTIVE}>
            <GoalsTable type={ACTIVE} dataSource={activeTrainings} />
          </PanelStyle>
        )}
        {!!planTrainings.length && (
          <PanelStyle header="Заплановані" key="plan" data-status={PLAN}>
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
