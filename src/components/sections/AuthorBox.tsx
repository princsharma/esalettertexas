import Image from "next/image";

/** M11: Author / reviewer box. Name, credentials, license state, "Medically reviewed by" + date. */
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
    <div className="flex items-center gap-4 rounded-card border border-neutral-200 bg-white p-5 shadow-card">
      <div className="h-14 w-14 flex-none overflow-hidden rounded-full bg-brand-100 ring-2 ring-brand-100">
        {avatarSrc && (
          <Image
            src={avatarSrc}
            alt={name}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="text-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-500">
          Medically reviewed
        </p>
        <p className="mt-0.5 font-bold text-neutral-900">
          {name}, {credentials}
        </p>
        <p className="text-neutral-500">
          Licensed in {licenseState} · Reviewed {reviewedDate}
        </p>
      </div>
    </div>
  );
}
