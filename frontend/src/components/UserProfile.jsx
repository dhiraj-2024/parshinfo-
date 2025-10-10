import React from "react";
import {
    User,
    Image,
    MessageSquare,
    Users,
    Settings,
    Edit,
    Mail,
    Heart,
} from "lucide-react";

const userData = {
    username: "tech_guru_99",
    bio: "Full-stack developer | React enthusiast | Building the future, one commit at a time. 🚀",
    profilePicture: "https://via.placeholder.com/150/007bff/ffffff?text=P",
    coverPhoto:
        "https://via.placeholder.com/800x200/4a5568/ffffff?text=Cover+Photo",
};

const friendsData = [
    {
        id: 1,
        name: "Alice Smith",
        avatar: "https://via.placeholder.com/50/ff5733/ffffff?text=A",
    },
    {
        id: 2,
        name: "Bob Johnson",
        avatar: "https://via.placeholder.com/50/33ff57/ffffff?text=B",
    },
    {
        id: 3,
        name: "Charlie Brown",
        avatar: "https://via.placeholder.com/50/3357ff/ffffff?text=C",
    },
    {
        id: 4,
        name: "Dana Scully",
        avatar: "https://via.placeholder.com/50/ff33a1/ffffff?text=D",
    },
];

const postsData = [
    {
        id: 103,
        content: "Just finished a major refactor! Code is much cleaner now. ✨",
        timestamp: "5 minutes ago",
        likes: 42,
        comments: 15,
    },
    {
        id: 102,
        content:
            "Learning new hooks in React. The 'useReducer' one is super powerful for complex state.",
        timestamp: "2 hours ago",
        likes: 88,
        comments: 31,
    },
    {
        id: 101,
        content:
            "Happy Friday, everyone! Time to relax and plan the next project. ☕️",
        timestamp: "Yesterday",
        likes: 120,
        comments: 50,
    },
];

const ProfileHeader = ({ user }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div
            className="h-48 bg-gray-600 bg-cover bg-center"
            style={{ backgroundImage: `url(${user.coverPhoto})` }}
        ></div>

        <div className="p-6 relative">
            <img
                src={user.profilePicture}
                alt={`${user.username}'s profile`}
                className="w-32 h-32 rounded-full border-4 border-white absolute -mt-20 left-6 object-cover"
            />

            <div className="ml-40 pt-1">
                <h1 className="text-3xl font-bold text-gray-800">{user.username}</h1>
                <p className="text-gray-600 mt-2 italic">{user.bio}</p>
            </div>
        </div>
    </div>
);

const FriendsList = ({ friends }) => (
    <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-indigo-500" />
            Friends ({friends.length})
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {friends.map((friend) => (
                <div
                    key={friend.id}
                    className="text-center p-3 hover:bg-gray-50 rounded-lg transition duration-150 cursor-pointer"
                >
                    <img
                        src={friend.avatar}
                        alt={friend.name}
                        className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                    />
                    <p className="text-sm font-medium text-gray-700 truncate">
                        {friend.name}
                    </p>
                </div>
            ))}
        </div>
    </div>
);

const PostsSection = ({ posts }) => (
    <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-indigo-500" />
            Recent Posts
        </h2>
        {posts.map((post) => (
            <div
                key={post.id}
                className="bg-white p-5 shadow-md rounded-lg border-l-4 border-indigo-500"
            >
                <p className="text-gray-700 mb-3 leading-relaxed">{post.content}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
                    <span className="italic">{post.timestamp}</span>
                    <div className="flex space-x-4">
                        <span className="flex items-center">
                            <Heart className="w-4 h-4 mr-1 text-red-500" /> {post.likes}
                        </span>
                        <span className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" /> {post.comments}
                        </span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const UserProfilePage = () => {
    const handleEditProfile = () => {
        alert("Edit Profile button clicked! Navigating to settings...");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex justify-end mb-4">
                    <button
                        onClick={handleEditProfile}
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]"
                    >
                        <Edit className="w-5 h-5 mr-2" />
                        Edit Profile
                    </button>
                </div>

                <ProfileHeader user={userData} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <PostsSection posts={postsData} />
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                        <FriendsList friends={friendsData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
