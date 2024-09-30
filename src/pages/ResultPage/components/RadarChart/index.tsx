import { ResponsiveRadar } from '@nivo/radar';
import { linearGradientDef } from '@nivo/core';

import { useCorrectCount } from '@/api/user/correctCount/query';
import { CustomLabel } from '@/pages/ResultPage/components/RadarChart/CustomLabel';

interface Props {
  userId: number;
}

function RadarChart({ userId }: Props) {
  const { data } = useCorrectCount({ userId });

  return (
    <div className='h-[310px]'>
      {data && (
        <ResponsiveRadar
          animate
          data={data?.chartData}
          indexBy='category'
          keys={['나', '평균']}
          margin={{ top: 54, bottom: 54, left: 48, right: 48 }}
          colors={['#4272DD', '#a1a1a1']}
          defs={[
            linearGradientDef('userBg', [
              { offset: 0, color: '#4272DD' },
              { offset: 100, color: '#8FEBFF' },
            ]),
            linearGradientDef('averageBg', [{ offset: 0, color: '#00000054' }]),
          ]}
          fill={[
            { match: d => d.key === '나', id: 'userBg' },
            { match: d => d.key === '평균', id: 'averageBg' },
          ]}
          fillOpacity={0.6}
          dotSize={5}
          borderWidth={1}
          gridLabel={props => <CustomLabel {...props} emojis={data?.emojis} />}
          gridLabelOffset={30}
          legends={[
            {
              anchor: 'top-right',
              data: [
                { id: '평균', label: '평균' },
                { id: '나', label: '나' },
              ],
              direction: 'column',
              itemHeight: 14,
              itemTextColor: '#6B7180',
              itemWidth: 34,
              itemsSpacing: 4,
              symbolShape: 'circle',
              symbolSize: 8,
              translateY: -54,
              translateX: -48,
              itemDirection: 'right-to-left',
            },
          ]}
        />
      )}
    </div>
  );
}

export default RadarChart;
