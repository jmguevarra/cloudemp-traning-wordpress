/**
 * Interface for WP Media Rest API Results
 * ex. http://localhost/byd/wp-json/wp/v2/media
 * 
 */


interface IWPMediaDetails {
    width: number;
    height: number;
    file: string;
    filesize: number;
    sizes: Record<string, any>; // Adjust type if specific sizes are expected
    image_meta: {
      aperture: string;
      credit: string;
      camera: string;
      caption: string;
      created_timestamp: string;
      copyright: string;
      focal_length: string;
      iso: string;
      shutter_speed: string;
      title: string;
      orientation: string;
      keywords: string[];
    };
}
  
interface RenderedContent {
    rendered: string;
}

interface LinkTargetHints {
    allow: string[];
}

interface Link {
    href: string;
    targetHints?: LinkTargetHints;
}

interface IWPMediaLinks {
    self: Link[];
    collection: Link[];
    about: Link[];
    author: {
        embeddable: boolean;
        href: string;
    }[];
    replies: {
        embeddable: boolean;
        href: string;
    }[];
}

interface IWPMediaObject {
    id: number;
    date: string;
    date_gmt: string;
    guid: RenderedContent;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: RenderedContent;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: {
        _acf_changed: boolean;
    };
    class_list: string[];
    acf: any[]; 
    description: RenderedContent;
    caption: RenderedContent;
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: IWPMediaDetails;
    post: number;
    source_url: string;
    _links: IWPMediaLinks;
}


export {
    IWPMediaObject,
    IWPMediaLinks,
    IWPMediaDetails 
}
  