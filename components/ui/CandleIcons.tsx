import Svg, { Ellipse, Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export function CandlesIcons({ size = 24, color = 'currentColor' }: Props) {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M7 14v6a1 1 0 001 1h2a1 1 0 001-1v-6'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      <Path
        d='M9 14c1.5-2 1.5-4 0-6-1.5 2-1.5 4 0 6z'
        fill={color}
        opacity={0.3}
      />

      <Path d='M9 8V6' stroke={color} strokeWidth={1.5} strokeLinecap='round' />

      <Ellipse cx={9} cy={5} rx={1} ry={1.5} fill={color} />

      <Path
        d='M13 14v6a1 1 0 001 1h2a1 1 0 001-1v-6'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      <Path
        d='M15 14c1.5-2 1.5-4 0-6-1.5 2-1.5 4 0 6z'
        fill={color}
        opacity={0.3}
      />

      <Path
        d='M15 8V6'
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
      />

      <Ellipse cx={15} cy={5} rx={1} ry={1.5} fill={color} />
    </Svg>
  );
}
