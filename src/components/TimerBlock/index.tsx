import React, { useEffect, useState } from "react";
import {
  TimerSection,
  TimerRow,
  ClockDisplay,
  RemainingTime,
} from "./styles";
import { useLogin } from "../../contexts/LoginContext";

const TimerBlock = () => {
  const { loggedIn } = useLogin();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [targetTime, setTargetTime] = useState<Date | null>(() => {
    const saved = localStorage.getItem("targetTime");
    return saved ? new Date(saved) : null;
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = e.target.value.split(":").map(Number);
    const newTarget = new Date();
    newTarget.setHours(hours);
    newTarget.setMinutes(minutes);
    newTarget.setSeconds(0);
    newTarget.setMilliseconds(0);

    // If the selected time is earlier than now, assume it's for tomorrow
    if (newTarget < new Date()) {
      newTarget.setDate(newTarget.getDate() + 1);
    }

    setTargetTime(newTarget);
    localStorage.setItem("targetTime", newTarget.toISOString());
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  if (loggedIn) {
    return (
      <TimerSection>
        <TimerRow>
          <RemainingTime>
            <label htmlFor="target-time">设置比赛结束时间 (HH:MM):</label>
            <input
              type="time"
              id="target-time"
              style={{
                fontSize: "1rem",
                marginTop: "1rem",
              }}
              onChange={handleTimeChange}
              value={
                targetTime
                  ? `${String(targetTime.getHours()).padStart(2, "0")}:${String(
                      targetTime.getMinutes()
                    ).padStart(2, "0")}`
                  : ""
              }
            />
          </RemainingTime>
        </TimerRow>
      </TimerSection>
    );
  }

  if (!targetTime) return null;

  const diffInSeconds = Math.max(
    0,
    Math.floor((targetTime.getTime() - currentTime.getTime()) / 1000)
  );

  return (
    <TimerSection>
      <TimerRow>
        <ClockDisplay>{currentTime.toLocaleTimeString()}</ClockDisplay>
        <RemainingTime>距离比赛结束: {formatTime(diffInSeconds)}</RemainingTime>
      </TimerRow>
    </TimerSection>
  );
};

export default TimerBlock;