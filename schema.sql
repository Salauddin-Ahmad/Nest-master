--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-08-11 03:19:17

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 856 (class 1247 OID 17925)
-- Name: post_entity_posttype_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.post_entity_posttype_enum AS ENUM (
    'post',
    'page',
    'story',
    'series'
);


ALTER TYPE public.post_entity_posttype_enum OWNER TO postgres;

--
-- TOC entry 859 (class 1247 OID 17934)
-- Name: post_entity_status_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.post_entity_status_enum AS ENUM (
    'draft',
    'scheduled',
    'review',
    'published'
);


ALTER TYPE public.post_entity_status_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 17972)
-- Name: meta_options; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meta_options (
    id integer NOT NULL,
    "metaValue" json NOT NULL,
    "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
    "updateDate" timestamp without time zone DEFAULT now() NOT NULL,
    "postId" integer
);


ALTER TABLE public.meta_options OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 17971)
-- Name: meta_options_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.meta_options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.meta_options_id_seq OWNER TO postgres;

--
-- TOC entry 4904 (class 0 OID 0)
-- Dependencies: 223
-- Name: meta_options_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.meta_options_id_seq OWNED BY public.meta_options.id;


--
-- TOC entry 220 (class 1259 OID 17944)
-- Name: post_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post_entity (
    id integer NOT NULL,
    title character varying(512) NOT NULL,
    "postType" public.post_entity_posttype_enum DEFAULT 'post'::public.post_entity_posttype_enum NOT NULL,
    slug character varying(255) NOT NULL,
    status public.post_entity_status_enum DEFAULT 'draft'::public.post_entity_status_enum NOT NULL,
    content text,
    schema text,
    "featuredImageUrl" character varying(1024),
    "publishOn" timestamp without time zone,
    "authorId" integer
);


ALTER TABLE public.post_entity OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 17943)
-- Name: post_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.post_entity_id_seq OWNER TO postgres;

--
-- TOC entry 4905 (class 0 OID 0)
-- Dependencies: 219
-- Name: post_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_entity_id_seq OWNED BY public.post_entity.id;


--
-- TOC entry 222 (class 1259 OID 17957)
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    description text,
    schema text,
    "featuredImageUrl" character varying(1024),
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone
);


ALTER TABLE public.tags OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 17956)
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tags_id_seq OWNER TO postgres;

--
-- TOC entry 4906 (class 0 OID 0)
-- Dependencies: 221
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- TOC entry 218 (class 1259 OID 17914)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    "firstName" character varying(95) NOT NULL,
    "lastName" character varying(95),
    email character varying(95) NOT NULL,
    password character varying(95) NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 17913)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 4907 (class 0 OID 0)
-- Dependencies: 217
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 4723 (class 2604 OID 17975)
-- Name: meta_options id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meta_options ALTER COLUMN id SET DEFAULT nextval('public.meta_options_id_seq'::regclass);


--
-- TOC entry 4717 (class 2604 OID 17947)
-- Name: post_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_entity ALTER COLUMN id SET DEFAULT nextval('public.post_entity_id_seq'::regclass);


--
-- TOC entry 4720 (class 2604 OID 17960)
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- TOC entry 4716 (class 2604 OID 17917)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 4898 (class 0 OID 17972)
-- Dependencies: 224
-- Data for Name: meta_options; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meta_options (id, "metaValue", "createdDate", "updateDate", "postId") FROM stdin;
14	"{\\"sidebarEnabled\\": true, \\"footerActive\\":true}"	2025-08-11 02:50:43.264213	2025-08-11 02:50:43.264213	16
\.


--
-- TOC entry 4894 (class 0 OID 17944)
-- Dependencies: 220
-- Data for Name: post_entity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.post_entity (id, title, "postType", slug, status, content, schema, "featuredImageUrl", "publishOn", "authorId") FROM stdin;
16	whats new in NestJS	post	new-with-nestjs	draft	test content	{"type":"object"}	https://example.com/image.jpg	2025-10-01 06:00:00	2
\.


--
-- TOC entry 4896 (class 0 OID 17957)
-- Dependencies: 222
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tags (id, name, slug, description, schema, "featuredImageUrl", "createdAt", "updatedAt", "deletedAt") FROM stdin;
\.


--
-- TOC entry 4892 (class 0 OID 17914)
-- Dependencies: 218
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, "firstName", "lastName", email, password) FROM stdin;
2	John	Doe	johndoe@gmail.com	12345678Tt@
\.


--
-- TOC entry 4908 (class 0 OID 0)
-- Dependencies: 223
-- Name: meta_options_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meta_options_id_seq', 14, true);


--
-- TOC entry 4909 (class 0 OID 0)
-- Dependencies: 219
-- Name: post_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.post_entity_id_seq', 16, true);


--
-- TOC entry 4910 (class 0 OID 0)
-- Dependencies: 221
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tags_id_seq', 1, false);


--
-- TOC entry 4911 (class 0 OID 0)
-- Dependencies: 217
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 2, true);


--
-- TOC entry 4741 (class 2606 OID 17981)
-- Name: meta_options PK_44c169e722c4204fa9641774a14; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meta_options
    ADD CONSTRAINT "PK_44c169e722c4204fa9641774a14" PRIMARY KEY (id);


--
-- TOC entry 4731 (class 2606 OID 17953)
-- Name: post_entity PK_58a149c4e88bf49036bc4c8c79f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_entity
    ADD CONSTRAINT "PK_58a149c4e88bf49036bc4c8c79f" PRIMARY KEY (id);


--
-- TOC entry 4727 (class 2606 OID 17921)
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- TOC entry 4735 (class 2606 OID 17966)
-- Name: tags PK_e7dc17249a1148a1970748eda99; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY (id);


--
-- TOC entry 4743 (class 2606 OID 18003)
-- Name: meta_options UQ_4f31301436c1a10e36f48e46626; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meta_options
    ADD CONSTRAINT "UQ_4f31301436c1a10e36f48e46626" UNIQUE ("postId");


--
-- TOC entry 4733 (class 2606 OID 17955)
-- Name: post_entity UQ_6e606c5d905ee68d531a4d66a06; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_entity
    ADD CONSTRAINT "UQ_6e606c5d905ee68d531a4d66a06" UNIQUE (slug);


--
-- TOC entry 4737 (class 2606 OID 17970)
-- Name: tags UQ_b3aa10c29ea4e61a830362bd25a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT "UQ_b3aa10c29ea4e61a830362bd25a" UNIQUE (slug);


--
-- TOC entry 4739 (class 2606 OID 17968)
-- Name: tags UQ_d90243459a697eadb8ad56e9092; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT "UQ_d90243459a697eadb8ad56e9092" UNIQUE (name);


--
-- TOC entry 4729 (class 2606 OID 17923)
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- TOC entry 4745 (class 2606 OID 18009)
-- Name: meta_options FK_4f31301436c1a10e36f48e46626; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meta_options
    ADD CONSTRAINT "FK_4f31301436c1a10e36f48e46626" FOREIGN KEY ("postId") REFERENCES public.post_entity(id) ON DELETE CASCADE;


--
-- TOC entry 4744 (class 2606 OID 18024)
-- Name: post_entity FK_6fbc92fc8a38f75ffe91acd93a8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_entity
    ADD CONSTRAINT "FK_6fbc92fc8a38f75ffe91acd93a8" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


-- Completed on 2025-08-11 03:19:25

--
-- PostgreSQL database dump complete
--

