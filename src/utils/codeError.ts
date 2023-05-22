export enum codeError {
	EMAIL_EXIST = 'EMAIL_EXIST',
	PHONE_NUMBER_EXIST = 'PHONE_NUMBER_EXIST',
	LOGIN_FAILED = 'LOGIN_FAILED',
	TOKEN_EXPIRED = 'TOKEN_EXPIRED',
	TOKEN_INVALID = 'TOKEN_INVALID',
	INVALID_FORM = 'INVALID_FORM',
	INVALID_OLD_PASSWORD = 'INVALID_OLD_PASSWORD',
}

export const messageError: { [key in codeError]: string } = {
	EMAIL_EXIST: 'Email entered is already registered, please enter another email',
	PHONE_NUMBER_EXIST: 'Phone number entered is already registered, please enter another email',
	LOGIN_FAILED: 'Login failed, please try again.',
	TOKEN_EXPIRED: 'Your token is expired, please login again.',
	TOKEN_INVALID: 'Your authorization is not available.',
	INVALID_FORM: 'Please check your input again.',
	INVALID_OLD_PASSWORD: 'Your old password is not true.',
}

export const throwCode = (code: codeError, message?: string) => {
	throw {
		code,
		message: message || messageError[code]
	}
}
