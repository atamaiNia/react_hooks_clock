import { useState, useEffect, useRef } from 'react';
import { ClockContainer, Text, Btn } from './Clock.styled';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      // console.log('Це інтервал кожні 2000ms ' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('Це функція очистки перед наступним викликом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <ClockContainer>
      <Text>
        Current time: <span> {time.toLocaleTimeString()}</span>
      </Text>
      <Btn type="button" onClick={stop}>
        Stop time
      </Btn>
    </ClockContainer>
  );
}
