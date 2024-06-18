// 랜덤으로 추천 비디오 선택하는 함수
import { videoList } from "../constants";


export function getRandomVideo() {
  const randomIndex = Math.floor(Math.random() * videoList.length);
  return videoList[randomIndex];
}
