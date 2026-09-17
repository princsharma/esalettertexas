import Image from "next/image";

/** M11 — Author / reviewer box. Name, credentials, license state, "Medically reviewed by" + date. */
export function AuthorBox({
  name,
  credentials,
  licenseState,
  reviewedDate,
  avatarSrc,
}: {
  name: string;
  credentials: string;
  licenseState: string;
  reviewedDate: string;
  avatarSrc?: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-card border border-neutral-200 bg-white p-4">
      <div className="h-12 w-12 flex-none overflow-hidden rounded-full bg-brand-100">
        {avatarSrc && (
          <Image
            src={avatarSrc}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="text-sm">
        <p className="font-semibold text-neutral-900">
          Medically reviewed by {name}, {credentials}
        </p>
        <p className="text-neutral-500">
          Licensed in {licenseState} · Reviewed {reviewedDate}
        </p>
      </div>
    </div>
  );
}
