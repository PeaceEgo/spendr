import type { ReactNode } from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type DonutSegment = {
  value: number;
  color: string;
};

type DonutChartProps = {
  size: number;
  stroke: number;
  segments: DonutSegment[];
  trackColor?: string;
  /** Degrees of empty space between segments (Figma rounded arc gaps). */
  segmentGapDegrees?: number;
  strokeLinecap?: 'round' | 'butt' | 'square';
  children?: ReactNode;
};

export function DonutChart({
  size,
  stroke,
  segments,
  trackColor = 'transparent',
  segmentGapDegrees = 3,
  strokeLinecap = 'round',
  children,
}: DonutChartProps) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);
  const segmentCount = segments.length;
  const gapLength =
    segmentCount > 1 ? (segmentGapDegrees / 360) * circumference : 0;
  const totalGapLength = gapLength * segmentCount;
  const drawableCircumference = circumference - totalGapLength;
  let cumulative = 0;

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size} height={size} style={{ position: 'absolute' }}>
        {trackColor !== 'transparent' ? (
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={trackColor}
            strokeWidth={stroke}
            fill="transparent"
          />
        ) : null}
        {total > 0
          ? segments.map((segment, index) => {
              const fraction = segment.value / total;
              const arcLength = Math.max(0, drawableCircumference * fraction);
              const offset = drawableCircumference * (cumulative / total) + index * gapLength;
              cumulative += segment.value;
              return (
                <Circle
                  key={`${segment.color}-${index}`}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke={segment.color}
                  strokeWidth={stroke}
                  strokeLinecap={strokeLinecap}
                  fill="transparent"
                  strokeDasharray={`${arcLength} ${circumference - arcLength}`}
                  strokeDashoffset={-offset}
                  transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
              );
            })
          : null}
      </Svg>
      {children}
    </View>
  );
}
