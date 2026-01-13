import { useStorage } from "@plasmohq/storage/hook"
import Section from "./components/Section"
import TextInput from "./components/TextInput"
import SelectInput from "./components/SelectInput"

const YES_NO_OPTIONS = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" }
]

export default function IndexPopup() {
  const [profile, setProfile] = useStorage("profile", {
    // ---------------- Personal ----------------
    firstName: "",
    lastName: "",
    preferredName: "",
    email: "",
    phone: "",

    // ---------------- Links ----------------
    linkedin: "",
    github: "",
    website: "",

    // ---------------- Work Authorization ----------------
    authorizedUS: "",
    visaRequired: "",
    over18: "",
    relocate: "",

    // ---------------- Experience (Primary) ----------------
    jobTitle: "",
    company: "",
    jobLocation: "",
    jobFrom: "",
    jobTo: "",
    jobDescription: "",

    // ---------------- Education (Primary) ----------------
    school: "",
    degree: "",
    fieldOfStudy: "",
    eduFrom: "",
    eduTo: ""
  })

  return (
    <div className="w-80 p-4">
      <h2 className="text-lg font-bold mb-4">
        Job Autofill Profile
      </h2>

      {/* ================= PERSONAL ================= */}
      <Section title="Personal Information">
        <TextInput
          label="First Name"
          value={profile.firstName}
          onChange={(v) => setProfile({ ...profile, firstName: v })}
        />

        <TextInput
          label="Last Name"
          value={profile.lastName}
          onChange={(v) => setProfile({ ...profile, lastName: v })}
        />

        <TextInput
          label="Preferred Name"
          value={profile.preferredName}
          onChange={(v) =>
            setProfile({ ...profile, preferredName: v })
          }
        />

        <TextInput
          label="Email"
          value={profile.email}
          onChange={(v) => setProfile({ ...profile, email: v })}
        />

        <TextInput
          label="Phone"
          value={profile.phone}
          onChange={(v) => setProfile({ ...profile, phone: v })}
        />
      </Section>

      {/* ================= LINKS ================= */}
      <Section title="Links">
        <TextInput
          label="LinkedIn"
          placeholder="https://linkedin.com/in/..."
          value={profile.linkedin}
          onChange={(v) => setProfile({ ...profile, linkedin: v })}
        />

        <TextInput
          label="GitHub"
          placeholder="https://github.com/..."
          value={profile.github}
          onChange={(v) => setProfile({ ...profile, github: v })}
        />

        <TextInput
          label="Portfolio / Website"
          value={profile.website}
          onChange={(v) => setProfile({ ...profile, website: v })}
        />
      </Section>

      {/* ================= WORK AUTH ================= */}
      <Section title="Work Authorization">
        <SelectInput
          label="Authorized to work in the US?"
          value={profile.authorizedUS}
          options={YES_NO_OPTIONS}
          onChange={(v) =>
            setProfile({ ...profile, authorizedUS: v })
          }
        />

        <SelectInput
          label="Require visa sponsorship?"
          value={profile.visaRequired}
          options={YES_NO_OPTIONS}
          onChange={(v) =>
            setProfile({ ...profile, visaRequired: v })
          }
        />

        <SelectInput
          label="18 years or older?"
          value={profile.over18}
          options={YES_NO_OPTIONS}
          onChange={(v) => setProfile({ ...profile, over18: v })}
        />

        <SelectInput
          label="Willing to relocate?"
          value={profile.relocate}
          options={YES_NO_OPTIONS}
          onChange={(v) => setProfile({ ...profile, relocate: v })}
        />
      </Section>

      {/* ================= EXPERIENCE ================= */}
      <Section title="Experience (Primary)">
        <TextInput
          label="Job Title"
          value={profile.jobTitle}
          onChange={(v) => setProfile({ ...profile, jobTitle: v })}
        />

        <TextInput
          label="Company"
          value={profile.company}
          onChange={(v) => setProfile({ ...profile, company: v })}
        />

        <TextInput
          label="Location"
          value={profile.jobLocation}
          onChange={(v) =>
            setProfile({ ...profile, jobLocation: v })
          }
        />

        <TextInput
          label="From"
          placeholder="MM/YYYY"
          value={profile.jobFrom}
          onChange={(v) => setProfile({ ...profile, jobFrom: v })}
        />

        <TextInput
          label="To"
          placeholder="MM/YYYY or Present"
          value={profile.jobTo}
          onChange={(v) => setProfile({ ...profile, jobTo: v })}
        />

        <TextInput
          label="Role Description"
          value={profile.jobDescription}
          onChange={(v) =>
            setProfile({ ...profile, jobDescription: v })
          }
        />
      </Section>

      {/* ================= EDUCATION ================= */}
      <Section title="Education (Primary)">
        <TextInput
          label="School / University"
          value={profile.school}
          onChange={(v) => setProfile({ ...profile, school: v })}
        />

        <TextInput
          label="Degree"
          value={profile.degree}
          onChange={(v) => setProfile({ ...profile, degree: v })}
        />

        <TextInput
          label="Field of Study"
          value={profile.fieldOfStudy}
          onChange={(v) =>
            setProfile({ ...profile, fieldOfStudy: v })
          }
        />

        <TextInput
          label="From Year"
          value={profile.eduFrom}
          onChange={(v) => setProfile({ ...profile, eduFrom: v })}
        />

        <TextInput
          label="To Year"
          value={profile.eduTo}
          onChange={(v) => setProfile({ ...profile, eduTo: v })}
        />
      </Section>
    </div>
  )
}
