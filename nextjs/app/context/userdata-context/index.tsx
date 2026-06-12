"use client";
import React, { createContext, useState, useEffect } from "react";

import {
  PostType,
  profiledataType,
  Reply,
  Comment,
} from "@/app/(dashboard-layout)/types/apps/userprofile";
import { getFetcher, postFetcher } from "@/app/api/global-fetcher";
import useSWR from "swr";
import {
  GallaryType,
  userType,
} from "@/app/(dashboard-layout)/types/apps/users";

// Define context type
export type UserDataContextType = {
  posts: PostType[];
  users: userType[];
  gallery: GallaryType[];
  loading: boolean;
  profileData: profiledataType;
  followers: userType[];
  search: string;
  error: Error | null;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  addGalleryItem: (item: GallaryType) => void;
  addReply: (postId: string, commentId: string, reply: Reply) => void;
  likePost: (postId: number | string) => void;
  addComment: (postId: string, comment: Comment) => void;
  likeReply: (postId: string | number, commentId: string | number) => void;
  toggleFollow: (id: string) => void;
};

// Create context
export const UserDataContext = createContext<UserDataContextType>(
  {} as UserDataContextType
);

// Default config values
const config = {
  posts: [],
  users: [],
  gallery: [],
  followers: [],
  search: "",
  loading: true,
};

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<PostType[]>(config.posts);
  const [users, setUsers] = useState<userType[]>(config.users);
  const [gallery, setGallery] = useState<GallaryType[]>(config.gallery);
  const [followers, setFollowers] = useState<userType[]>(config.followers);
  const [search, setSearch] = useState<string>(config.search);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(config.loading);
  const [profileData, setProfileData] = useState<profiledataType>({
    name: "Mathew Anderson",
    role: "Designer",
    avatar: "/images/profile/user-1.png",
    coverImage: "/images/backgrounds/profilebg.jpg",
    postsCount: 938,
    followersCount: 3586,
    followingCount: 2659,
  });

  const {
    data: postsData,
    isLoading: isPostsLoading,
    error: postsError,
    mutate,
  } = useSWR("/api/userprofile", getFetcher);
  const {
    data: usersData,
    isLoading: isUsersLoading,
    error: usersError,
  } = useSWR("/api/userprofile/get-users", getFetcher);
  const {
    data: galleryData,
    isLoading: isGalleryLoading,
    error: galleryError,
  } = useSWR("/api/userprofile/get-gallery", getFetcher);

  useEffect(() => {
    if (postsData && usersData && galleryData) {
      setPosts(postsData.data);
      setLoading(isPostsLoading);
      setUsers(usersData.data);
      setLoading(isUsersLoading);
      setFollowers(usersData.data);
      setGallery(galleryData.data);
      setLoading(isGalleryLoading);
    } else if (postsError) {
      setError(postsError);
      setLoading(isPostsLoading);
    } else if (usersError) {
      setError(usersError);
      setLoading(isUsersLoading);
    } else if (galleryError) {
      setError(galleryError);
      setLoading(isGalleryLoading);
    } else {
      setLoading(isGalleryLoading);
    }
  }, [
    postsData,
    usersData,
    galleryData,
    isPostsLoading,
    isUsersLoading,
    isGalleryLoading,
    galleryError,
    postsError,
    usersError,
  ]);

  // Function to add a new item to the gallery
  const addGalleryItem = (item: GallaryType) => {
    setGallery((prevGallery) => [...prevGallery, item]);
  };

  // Function to toggle follow/unfollow status of a user
  const toggleFollow = (id: string) => {
    setFollowers((prevFollowers) =>
      prevFollowers.map((follower) =>
        follower.id === id
          ? { ...follower, isFollowed: !follower.isFollowed }
          : follower
      )
    );
  };

  // Function to filter followers based on search input
  const filterFollowers = () => {
    if (followers) {
      return followers.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return followers;
  };

  // Add comment to a post
  const addComment = async (postId: string, comment: Comment) => {
    console.log("comment", comment);
    try {
      await mutate(
        postFetcher("/api/userprofile/add-comments", {
          postId,
          comment,
        })
      );
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  // Add reply to a comment
  const addReply = async (postId: string, commentId: string, reply: Reply) => {
    try {
      await mutate(
        postFetcher("/api/userprofile/add-replies", {
          postId,
          commentId,
          reply,
        })
      );
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  // Function to toggle like/unlike a post
  const likePost = async (postId: number | string) => {
    try {
      await mutate(postFetcher("/api/userprofile", { postId }));
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  // Function to toggle like/unlike a reply to a comment
  const likeReply = async (
    postId: string | number,
    commentId: string | number
  ) => {
    try {
      await mutate(
        postFetcher("/api/userprofile/replies-like", { postId, commentId })
      );
    } catch (error) {
      console.error("Error liking reply:", error);
    }
  };

  return (
    <UserDataContext.Provider
      value={{
        posts,
        users,
        error,
        gallery,
        loading,
        profileData,
        addGalleryItem,
        addReply,
        likePost,
        addComment,
        likeReply,
        followers: filterFollowers(),
        toggleFollow,
        setSearch,
        search,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
