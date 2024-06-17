// 운세를 위한 랜덤 숫자를 생성하는 함수
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
