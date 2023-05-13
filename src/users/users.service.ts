import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { UserInfo } from './UserInfo';

@Injectable()
export class UsersService {
  constructor(private readonly emailService: EmailService) {}
  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  private checkUserExists(email: string) {
    return false; // TODO: DB 연동 후 구현
  }

  /**
   * 유저를 데이터베이스에 저장합니다.
   * @param name
   * @param email
   * @param password
   * @param signupVerifyToken
   * @private
   */
  private saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    return; // TODO: DB 연동 후 구현
  }

  /**
   * 회원 가입 인증 이메일을 ㅂ라송합니다.
   * @param email
   * @param signupVerifyToken
   * @private
   */
  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }

  /**
   * 이메일 인증 로직
   * @param signupVerifyToken
   */
  async verifyEmail(signupVerifyToken: string): Promise<string> {
    // TODO
    //  1. DB에서 signupVerifyToken으로 회원 가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리
    //  2. 바로 로그인 상태가 되도록 JWT를 발급

    throw new Error('Method not implemented');
  }

  /**
   * JWT 발급
   * @param email
   * @param password
   */
  async login(email: string, password: string): Promise<string> {
    // TODO
    //  1. email, password를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리
    //  2. JWT를 발급

    throw new Error('Method not implemented.');
  }

  async getUserInfo(userId: string): Promise<UserInfo> {
    // TODO
    //  1. userId를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리
    //  2. 조회된 데이터를 UserInfo 타입으로 응답

    throw new Error('Method not implemented.');
  }
}
