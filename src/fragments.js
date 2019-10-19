export const COMMENT_FRAGMENT = `
    id
    text
`;

export const USER_FRAGMENT = `
    id
    username
`;

export const FILE_FRAGMENT = `
    id
    url
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post {
    id
    location
    caption
    comments {
      ${COMMENT_FRAGMENT}
    }
    user {
      ${USER_FRAGMENT}
    }
    files {
      ${FILE_FRAGMENT}
    }
  }
`;

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room {
        id
        participants {
            id
        }
    }
`;
