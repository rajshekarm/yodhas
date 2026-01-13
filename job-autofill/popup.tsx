import { useStorage } from "@plasmohq/storage/hook"

export default function IndexPopup() {
  const [profile, setProfile] = useStorage("profile", {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })

  return (
    <div className="w-80 p-4">
      <h2 className="text-lg font-bold mb-3">Job Autofill Profile</h2>

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="First Name"
        value={profile.firstName}
        onChange={(e) =>
          setProfile({ ...profile, firstName: e.target.value })
        }
      />

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Last Name"
        value={profile.lastName}
        onChange={(e) =>
          setProfile({ ...profile, lastName: e.target.value })
        }
      />

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Email"
        value={profile.email}
        onChange={(e) =>
          setProfile({ ...profile, email: e.target.value })
        }
      />

      <input
        className="w-full mb-2 p-2 border rounded"
        placeholder="Phone"
        value={profile.phone}
        onChange={(e) =>
          setProfile({ ...profile, phone: e.target.value })
        }
      />
    </div>
  )
}
