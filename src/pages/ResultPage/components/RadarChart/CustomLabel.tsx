import { GridLabelProps } from '@nivo/radar';

interface Props extends GridLabelProps {
  emojis: Record<string, string>;
}

export function CustomLabel(props: Props) {
  const quadrant = getQuadrant(props.angle);

  return (
    <g transform={`translate(${props.x}, ${props.y})`}>
      <g textAnchor='center'>
        <text alignmentBaseline='after-edge' textAnchor='middle' fontSize={20} dy={getDyValues(quadrant).up}>
          {props.emojis[props.id]}
        </text>
        <text textAnchor='middle' alignmentBaseline='hanging' fontSize={10} dy={getDyValues(quadrant).down}>
          {props.id}
        </text>
      </g>
    </g>
  );
}

function getQuadrant(angle: number) {
  if (angle < 0 && -90 < angle) return 1;
  if ((-180 < angle && angle < -90) || 180 < angle) return 2;
  if ((90 < angle && angle < 180) || angle < -180) return 3;
  if (0 < angle && angle < 90) return 4;

  switch (angle) {
    case 0:
      return '+x';
    case -90:
      return '+y';
    case -180:
    case 180:
      return '-x';
    case 90:
      return '-y';
    default:
      return '';
  }
}

function getDyValues(quadrant: ReturnType<typeof getQuadrant>) {
  if ([1, 2, '+y'].includes(quadrant)) {
    return {
      up: '-0.2rem',
      down: '',
    };
  }

  if ([3, 4, '-y'].includes(quadrant)) {
    return {
      up: '0.6rem',
      down: '0.8rem',
    };
  }

  return {
    up: '-0.1rem',
    down: '0.1rem',
  };
}
