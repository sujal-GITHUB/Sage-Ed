import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"

export const UserProfile = () => (
  <div className="flex items-center space-x-2">
    <Avatar className="w-8 h-8">
      <AvatarImage src="/placeholder.svg" />
      <AvatarFallback>ET</AvatarFallback>
    </Avatar>
    <div className="text-sm">
      <div>Ellington Thom</div>
      <div className="text-xs text-gray-400">ellington@gmail.com</div>
    </div>
  </div>
)