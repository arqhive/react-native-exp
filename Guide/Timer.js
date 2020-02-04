import {InteractionManager} from 'react-native';

// setTimeout, clearTimeout
// setInterval, clearInterval
// setImmediate, clearImmediate
// requestAnimationFrame, cancelAnimationFrame

// 잘 구축된 앱이 매끄럽게 느껴지는 이유 중 하나는 상호작용 및 애니메이션 중 값 비싼 작업을 피하는 것에 있다.
// RN은 단일 JS 실행 스레드만 있다는 제한 사항이 있지만. InteractionManager를 이용해 상호작용 및 애니메이션 작업이 완료된 후에 장기 실행 작업이 시작되도록 예약하는데 사용할 수 있다.

InteractionManager.runAfterInteractions(() => {
  // 오래 걸리는 비동기 작업
  // 활성 애니메이션을 지연시키지 않고 나중에 코드를 실행
  // 모든 터치가 종료되거나 취소 될 때까지 콜백을 지연시킨다.
});

// 다른 스케쥴링 대안
requestAnimationFrame(); // 시간이 지남에 따라 뷰를 애니메이션 함
setImmediate(), setTimeout(), setInterval(); // 나중에 코드를 실행하면 애니메이션이 지연 될 수도 있다.
