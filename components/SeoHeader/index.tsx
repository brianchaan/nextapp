import { NextSeo } from 'next-seo';
import { useRouter } from 'next/dist/client/router';

export interface SeoHeaderProps {
  title?: string;
  description?: string;
  image?: string;
}

const SeoHeader: React.FC<SeoHeaderProps> = ({
  title = 'H1 Web Developer',
  description = 'H1 Web Development',
  image = 'og.png',
}): JSX.Element => {
  const siteURL = 'https://brianhaan.me';
  const openGraphImageUrl = `${siteURL}${image}`;
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
            url: openGraphImageUrl,
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
};

export default SeoHeader;
