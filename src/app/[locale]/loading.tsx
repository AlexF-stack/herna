import { brandAssets } from "@/content/brand";

/** Instant visual feedback while App Router streams the next page */
export default function LocaleLoading() {
  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-white"
      role="status"
      aria-busy="true"
      aria-label="Loading"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brandAssets.logoOpaqueSrc}
        alt=""
        width={420}
        height={160}
        className="w-[min(72vw,20rem)] object-contain"
      />
      <div className="mt-10 h-px w-36 overflow-hidden bg-black/10 sm:w-44">
        <div className="route-loading-bar h-full w-1/3 bg-[color:var(--gold)]" />
      </div>
    </div>
  );
}
