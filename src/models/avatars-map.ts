import Avatar1 from "$lib/images/avatar/avatar_1.png";
import Avatar2 from "$lib/images/avatar/avatar_2.png";
import Avatar3 from "$lib/images/avatar/avatar_3.png";
import Avatar4 from "$lib/images/avatar/avatar_4.png";
import Avatar5 from "$lib/images/avatar/avatar_5.png";
import Avatar6 from "$lib/images/avatar/avatar_6.png";
import Avatar7 from "$lib/images/avatar/avatar_7.png";
import Avatar8 from "$lib/images/avatar/avatar_8.png";

const avatars = new Map([
    [1, Avatar1],
    [2, Avatar2],
    [3, Avatar3],
    [4, Avatar4],
    [5, Avatar5],
    [6, Avatar6],
    [7, Avatar7],
    [8, Avatar8],
]);

export const getAvatar = (id: number) => avatars.get(id);