export default function ItemUser(user) {

    return <li key={user.id} className="w-full block">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 w-full">
            <div className="w-1/2">
                <h2 className="text-lg font-bold">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div className="w-1/2">
                <p className="text-sm text-gray-500">{user.phone}</p>
                <p className="text-sm text-gray-500">{user.website}</p>
            </div>
        </div>
    </li>
}