import api from "./core";
import { emailPost } from "../pages/SignUpTwo"

const apis = {
    getTeamMain: () => api.get(`/api/teams/${teamId}`), // 팀 메인 게시판
    postMeetRoom: () => api.post(`/api/teams/${teamId}/meetings`), // 미팅룸 만들기
    getMeetDetail: () => api.get(`/api/teams/${teamsId}/meetings/${meetingId}`), // 미팅룸 상세조회
    postInviteTeam: (data) => api.get(`/api/teams/auth-code`, data), //초대받은 팀 찾기
    postTeam: (data) => api.post(`/api/teams`, data), // 팀만들기
    getTeam: () => api.get(`/api/teams`), // 팀선택페이지
    // 경계
    postLogin: (data) => api.post(`/api/users/login`, data), // 로그인
    postEmailCheck: (data) => api.post(`/api/users/emails`, data), // 이메일 인증
    postAuth: (data) => api.post(`/api/users/emails/auth-code`, data), // 이메일 코드인증
    patchPassword: (data) => api.patch(`/api/users/password/${data.userid}`, data), // 패스워드 생성
    postNickCheck: (data) => api.post(`/api/users/nickname`, data), // 닉네임 중복체크
    patchNickSave: (data) => api.patch(`/api/users/nickname/${data.userid}`, data), // 닉네임 저장
    postPicturePost: () => api.post(`/api/users/signup/profile`,), // 프로필사진 등록
    postNickNameCreate: (data) => api.post(`api/users/signup/profile/{userid}`, data), // 닉네임 프로필 저장
    postSignUp: (data) => api.post(`/api/users/signup`, data), // 회원가입
}

export default apis;