import formatTimeAgo from "../../utils/formatTimeAgo";

interface Post {
    title: string;
    description: string;
    createdAt: string;
}

interface User  {
    name: string;
}

interface Props {
    post: Post;
    user: User;
}


export default function Post({ post, user }: Props) {

    return (
      <div className={'lex flex-col overflow-hidden rounded-lg shadow-lg '}>
        <div className="flex flex-1 flex-col justify-between p-6 pb-3">
            <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-100">
                    {user?.name}
                  </p>
                  <p className="text-sm text-gray-300">{formatTimeAgo(post.createdAt)}</p>
                </div>
                <div className="flex-1 mt-1">
                  <p className="text-xl font-semibold text-gray-100">
                    {post.title.substring(0, 50)}
                  </p>
                </div>
            </div>
            <div className="mt-4 mx-5 max-h-52 overflow-hidden border-b border-gray-700 whitespace-pre-wrap break-words">
                <p className="text-gray-100">
                    {post.description}
                </p>
            </div>
        </div>
      </div>
    )
}