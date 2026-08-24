"use client";

const PREFIXES = [
  { value: "+44", label: "+44 UK" },
  { value: "+353", label: "+353 IE" },
  { value: "+49", label: "+49 DE" },
  { value: "+33", label: "+33 FR" },
  { value: "+971", label: "+971 UAE" },
  { value: "+65", label: "+65 SG" },
  { value: "+61", label: "+61 AU" },
  { value: "+1", label: "+1" },
  { value: "+", label: "Other" },
];

interface PhoneFieldProps {
  inputClass: string;
  labelClass: string;
}

export function PhoneField({ inputClass, labelClass }: PhoneFieldProps) {
  return (
    <div>
      <label htmlFor="phone" className={labelClass}>
        Phone (optional)
      </label>
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
        <select
          id="phonePrefix"
          name="phonePrefix"
          defaultValue="+44"
          aria-label="Country calling code"
          className={`${inputClass} sm:max-w-[8.5rem] sm:shrink-0`}
        >
          {PREFIXES.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="Phone number"
          className={`${inputClass} min-w-0 flex-1`}
        />
      </div>
    </div>
  );
}

/** Combine prefix + national digits for API payload */
export function formatPhoneFromFormData(data: FormData): string {
  const prefix = String(data.get("phonePrefix") || "+44").trim();
  const national = String(data.get("phone") || "")
    .replace(/\s/g, "")
    .trim();
  if (!national) return "";
  if (prefix === "+") return national.startsWith("+") ? national : `+${national}`;
  const normalizedPrefix = prefix.startsWith("+") ? prefix : `+${prefix}`;
  return `${normalizedPrefix}${national}`;
}
