import { useEffect, useMemo, useRef } from 'react'
import Two from 'two.js'

function getLocalDateTimeInTimeZone(timeZone: string): Date {
  const date = new Date();
  const localeString = date.toLocaleString('en-US', { timeZone });
  return new Date(localeString);
}

export type ClockProps = {
  timezone: string;
  texture: string;
}

export const Clock : React.FC<ClockProps> = ({ timezone, texture }) => {
  const radius = 100;
  const x = 110;
  const y = 110;

  const ref = useRef<HTMLDivElement>(null);
  const two = useMemo(() => 
    new Two({
      width: x * 2,
      height: y * 2,
      autostart: true
    }), [x, y]);

  useEffect(() => {
    if(ref === null || ref.current === null) {
      return;
    }
    two.appendTo(ref.current);

    const background = two.makeTexture(texture, () => {
      background.scale = radius * 2 / background.image.width;
    });
    background.repeat = 'no-repeat';

    const circle = two.makeCircle(x, y, radius);
    circle.stroke = '#000';
    circle.linewidth = 5;
    circle.fill = background;


    [0,1,2,3,4,5,6,7,8,9,10,11,11].forEach((i) => {
      const angle = 30 * i;
      const radians = angle * (Math.PI / 180);
      const dotX = 90 * Math.cos(radians)
      const dotY = 90 * Math.sin(radians)

      const dot = two.makeCircle(x + dotX, y + dotY, 5);
      dot.fill = '#000';
    });

    const hourHand = two.makeLine(0, 0, 0, - 50);
    hourHand.stroke = '#000';
    hourHand.linewidth = 5;

    const minuteHand = two.makeLine(0, 0, 0, - 80);
    minuteHand.stroke = '#000';
    minuteHand.linewidth = 3;

    const center = two.makeCircle(0, 0, 5);
    center.fill = '#FF0000';

    const hands = two.makeGroup(hourHand, minuteHand, center);
    hands.translation.set(x, y);

    const updateClock = () => {
      const hours = getLocalDateTimeInTimeZone(timezone).getHours() % 12;
      const minutes = getLocalDateTimeInTimeZone(timezone).getMinutes();

      hourHand.rotation = (hours * 30) * (Math.PI / 180) + (minutes * 0.5) * (Math.PI / 180);
      minuteHand.rotation = (minutes * 6) * (Math.PI / 180);  
    };

    two.bind('update', updateClock);
  }, [ref, two, timezone, texture])

  return (
    <div ref={ref} />
  )
}