/*
You will be given a number N that represents where the minute hand currently is on a clock. Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.
*/

// a full circle 60min= 360;
// 1min = 6 degree

const calcClockAngle = n => {
	return n * 6;
};
