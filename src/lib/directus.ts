import { createDirectus, rest } from '@directus/sdk';


interface Global {
    author: string;
    site_language: string;
    sate_title: string;
    description: string;
    site_url: string;
    contact_email: string;
    facebook_page: string;
    github_page: string;
    twitter_username: string;
    og_image: any;
}

interface Exam {
    slug: string;
    name: string;
    description: string;
    programs: any;
    katas: any;
    techniques: any;
}

interface Program {
    slug: string;
    name: string;
    description: string;
    sort: number;
    content: any;
    id: string;
    isDynamnic: boolean;
    urls: Url[];
}

interface Technique {
    slug: string;
    name: string;
    it_name: string,
    jpn_name: string;
    description: any;
    ifj_url: string;
    sub_category_id: any;
    category_id: any;
    videos: any;
}

interface Kata {
    slug: string;
    name: string;
    traduction_name: string,
    jpn_name: string;
    pdf_url: string;
    sort: number;
    videos: any;
}

interface Url {
    name: string;
    url: string;
    isPdf: boolean;
}

interface Video {
    url_yt: string;
    name: string;
    alt: string;
    description: string
}

interface Schema {
    techniques: Technique[];
    global: Global;
    exams: Exam[];
    programs: Program[];
    katas: Kata[];
    urls: Url[];
    videos: Video[];
}


const directus = createDirectus<Schema>('https://directus-production-1d11.up.railway.app/').with(rest());

export default directus;