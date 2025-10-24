"use client";

import React from "react";
import Image from "next/image";
// import { ICONS } from "../../constants/icons";
import styles from "./RatingCard.module.css";

interface StarRatingProps {
	isFill: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ isFill }) => {
	return (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.star}>
			<path
				d="M13.5 2L16.5 8.5L23.5 9.5L18.5 14.5L20 21.5L13.5 18L7 21.5L8.5 14.5L3.5 9.5L10.5 8.5L13.5 2Z"
				fill={isFill ? "#FFD700" : "none"}
				stroke={isFill ? "#FFD700" : "#E0E0E0"}
				strokeWidth="1.5"
			/>
		</svg>
	);
};

interface RatingCardProps {
	ratings: number;
	review: string;
	userImage: string;
	username: string;
	designation: string;
}

const RatingCard: React.FC<RatingCardProps> = ({ ratings, review, userImage, username, designation }) => {
	const renderStars = () => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			stars.push(<StarRating key={i} isFill={i <= ratings} />);
		}
		return stars;
	};

	return (
		<div className={styles.ratingCard}>
			<div className={styles.rating}>{renderStars()}</div>

			<div className={styles.user}>
				{userImage ? (
					<div className={`${styles.userProfile} user-image`}>
						<Image src={userImage} alt="User profile" fill className={styles.userImage} />
					</div>
				) : null}

				<div className={styles.userDetail}>
					<p className={`${styles.username} username`}>{username}</p>
					{designation ? <p className={`${styles.designation} designation`}>{designation}</p> : null}
				</div>
			</div>

			<div className={styles.review}>
				<p className={`${styles.reviewText} review-text`}>{review}</p>
			</div>

			{/* <div className={styles.posting}>
				<p className={`${styles.postedOn} posted-on-text`}>Posted on</p>
				<div className={`${styles.googleLogo} google-logo`}>
					<Image src={ICONS.google} alt="Google" fill />
				</div>
			</div> */}
		</div>
	);
};

export default RatingCard;
