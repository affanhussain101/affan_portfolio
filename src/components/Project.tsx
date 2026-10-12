import React, { useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import mock10 from '../assets/images/mock10.png';
import mock08 from '../assets/images/mock08.png';
import mock07 from '../assets/images/mock07.png';
import mock11 from '../assets/images/mock11.png';
import mock12 from '../assets/images/mock12.png';
import mock13 from '../assets/images/mock13.png';
import '../assets/styles/Project.scss';

interface ImageCarouselProps {
    images: string[];
    alt: string;
    link?: string;
}

function ImageCarousel({ images, alt, link }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="image-carousel">
            {link ? (
                <a href={link} target="_blank" rel="noreferrer" className="carousel-link">
                    <img
                        src={images[currentIndex]}
                        className="zoom carousel-img"
                        alt={`${alt} ${currentIndex + 1}`}
                    />
                </a>
            ) : (
                <div className="carousel-link no-hover">
                    <img
                        src={images[currentIndex]}
                        className="carousel-img"
                        alt={`${alt} ${currentIndex + 1}`}
                    />
                </div>
            )}
            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className="carousel-btn prev-btn"
                        onClick={handlePrev}
                        aria-label="Previous image"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <button
                        type="button"
                        className="carousel-btn next-btn"
                        onClick={handleNext}
                        aria-label="Next image"
                    >
                        <ChevronRightIcon />
                    </button>
                    <div className="carousel-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setCurrentIndex(index);
                                }}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Featured Projects & Solutions</h1>
            <div className="projects-grid">
                <div className="project">
                    <ImageCarousel
                        images={[mock10, mock11, mock12]}
                        alt="AI Sales Copilot"
                        link="https://github.com/hussainaffan/sales_that_never_fails"
                    />
                    <a href="https://github.com/hussainaffan/sales_that_never_fails" target="_blank" rel="noreferrer">
                        <h2>AI Sales Copilot</h2>
                    </a>
                    <p>Architected an end-to-end AI sales assistant with dual-layer data architecture (relational + vector DB) for automated document ingestion (PDFs, spreadsheets). Features Live AI Helper Q&A, pre-meeting briefings, historical estimation engine, and predictive deal win probability scoring. (Python, RAG, RDBMS, Vector DB, Analytics)</p>
                </div>
                <div className="project">
                    <ImageCarousel
                        images={[mock07]}
                        alt="Multi-Tenant Microservices"
                    />
                    <h2>Fintech Debt Management Platform (CCMR3)</h2>
                    <p>Architected and deployed a multi-tenant microservices platform from scratch for enterprise debt management, utilizing dedicated database/schema isolation in SQL Server to guarantee strict compliance and tenant data segregation while reducing tenant onboarding overhead by 90%. Engineered resilient asynchronous processing queues and optimized high-volume database operations using EF Core, batching, stored procedures, and Redis caching to support heavy financial transaction loads with sub-second response times.</p>
                </div>
                <div className="project">
                    <ImageCarousel
                        images={[mock08]}
                        alt="RAG Text-to-SQL"
                    />
                    <h2>Production RAG Text-to-SQL Engine</h2>
                    <p>Engineered an enterprise-grade Natural Language to SQL engine using Python, FastAPI, and local LLMs, guaranteeing zero data leakage by isolating inference on-premise. Architected a multi-layered indexing pipeline—combining table-level semantic embeddings with granular column- and categorical value-level indexes—to prune large relational schemas dynamically and generate highly accurate, injection-safe SQL queries across SQL Server databases.</p>
                </div>

                <div className="project">
                    <ImageCarousel
                        images={[mock13]}
                        alt="Autonomous SDLC Pipeline"
                    />
                    <h2>Autonomous SDLC Automation Pipeline</h2>
                    <p>Engineered an agentic workflow that autonomously translates Jira ticket requirements into committed code and GitHub PRs using Claude Code and Model Context Protocol (MCP). Integrated Local LLMs to ensure enterprise code privacy and compliance. (Claude Code, MCP, Local LLMs, Jira API, GitHub)</p>
                </div>
            </div>
        </div>
    );
}

export default Project;