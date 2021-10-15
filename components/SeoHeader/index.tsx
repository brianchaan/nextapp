import { NextSeo } from 'next-seo';
import { useRouter } from 'next/dist/client/router';

export default function SeoHeader(): JSX.Element {
  const title = 'H1 Web Development';
  const description = 'H1 Web Development';
  const ogImgRelativePath = '/og.png';

  const siteURL = 'https://brianhaan.me';
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const url = pathName === '/' ? siteURL : siteURL + pathName;
  const twitterHandle = '@brianchaan';
  const siteName = 'brianhaan.me';

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url,
        title,
        description,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
            alt: 'brianhaan.me - H1 Web Development',
          },
        ],
        site_name: siteName,
      }}
      twitter={{
        handle: twitterHandle,
        site: twitterHandle,
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          property: 'author',
          content: title,
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: `${siteURL}/favicon.ico`,
        },
      ]}
    />
  );
}
