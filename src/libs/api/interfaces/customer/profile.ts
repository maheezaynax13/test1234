type Gender = 'Male' | 'Female' | 'Others';

export interface IProfile {
	firstName: string;
	lastName: string;
	avatarURL: string;
	gender: Gender | string;
	mobileNumber: string;
	mobileNumberAlt: string;
	email: string;
	dateOfBirth: Date;
	zID: string;
	createdAt: Date;
	updatedAt: Date;
	id: string;
}

export interface IProfileUpdate {
	firstName: string;
	lastName: string;
	email: string;
	mobileNumberAlt: string;
	dateOfBirth: string;
	gender: Gender | string;
}

export interface IUpdatePassword {
	currentPassword: string;
	newPassword: string;
	confirmPassword: string;
}
