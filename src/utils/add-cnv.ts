/**
 * 1. 구매완료 - value 가 필수입니다.
 * 2. 회원가입
 * 3. 장바구니담기
 * 4. 신청/예약
 * 5. 기타
 */
type CnvType = "1" | "2" | "3" | "4" | "5";
export function addCnv(type: "1", value: string): void;

/**
 * 프리미엄 로그분석의 전환 정보 추가
 * @param type
 * @param value
 */
export function addCnv(type: CnvType, value: string = "1") {
  window.wcs.cnv(type, value);
}
