/**
 * Naver Analytics Script with initial configuration
 * @constructor
 */
export function NaverAnalytics({ accountId }: { accountId: string }) {
  return (
    <>
      <script src="//wcs.naver.net/wcslog.js" type="text/javascript"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `if(!wcs_add)var wcs_add={};wcs_add["wa"]="${accountId}";if(window.wcs)wcs_do();`,
        }}
        type="text/javascript"
      />
    </>
  );
}
