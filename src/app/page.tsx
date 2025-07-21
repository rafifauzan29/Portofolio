'use client'
import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, ArrowRight, MoveRight } from 'lucide-react'
import { toast } from 'sonner'

// Project data
const projects = [
	{
		name: 'Ngopilosofi',
		description:
			'A mobile app for ordering coffee offline with table QR scanning, made with Framework7 + Capacitor.',
		tech: ['Framework7', 'Vue', 'Capacitor'],
		image: '/projects/ngopilosofi.jpg',
		link: 'https://github.com/rafi/ngopilosofi',
	},
	{
		name: 'Logiland Game',
		description:
			'An educational Flutter-based game with logic puzzles and progressive levels for kids.',
		tech: ['Flutter', 'Dart'],
		image: '/projects/logiland.jpg',
		link: 'https://github.com/rafi/logiland',
	},
	{
		name: 'iPlanit',
		description:
			'A personal project planner app with analytics and smart task prioritization, built using Laravel and Vue.',
		tech: ['Laravel', 'Vue'],
		image: '/projects/iplanit.jpg',
		link: 'https://github.com/rafi/iplanit',
	},
	{
		name: 'Manajemen Skripsi',
		description:
			'A complete thesis management system built with Next.js, Prisma, PostgreSQL, and ShadCN UI.',
		tech: ['Next.js', 'PostgreSQL', 'Prisma'],
		image: '/projects/skripsi.jpg',
		link: 'https://github.com/rafi/manajemen-skripsi',
	},
	{
		name: 'Museum Galeri Arsip COVID-19 Jabar',
		description:
			'A virtual archive & museum site for COVID-19 response in West Java. Built with Laravel + Bootstrap.',
		tech: ['Laravel', 'Bootstrap'],
		image: '/projects/museum.jpg',
		link: 'https://github.com/rafi/museum-covid19-jabar',
	},
]

// Skills data
const skills = {
	Languages: ['HTML', 'CSS', 'PHP', 'JavaScript', 'TypeScript', 'Dart', 'Java'],
	Frameworks: ['Laravel', 'Next.js', 'Flutter', 'Framework7', 'NetBeans'],
	Certifications: ['CCNA', 'SRWE', 'ENSA'],
}

export default function Home() {
	const [contactForm, setContactForm] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		toast.success('Pesan berhasil dikirim!')
		setContactForm({ name: '', email: '', message: '' })
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setContactForm({ ...contactForm, [e.target.name]: e.target.value })
	}

	return (
		<>
			{/* Hero Section */}
			<section
				id="home"
				className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
			>
				{/* Animated background elements */}
				<div className="absolute inset-0 overflow-hidden">
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute rounded-full bg-primary/10"
							initial={{
								x: Math.random() * 100 - 50,
								y: Math.random() * 100 - 50,
								width: Math.random() * 300 + 100,
								height: Math.random() * 300 + 100,
								opacity: 0.1,
							}}
							animate={{
								x: Math.random() * 200 - 100,
								y: Math.random() * 200 - 100,
								transition: {
									duration: Math.random() * 20 + 10,
									repeat: Infinity,
									repeatType: 'reverse',
								},
							}}
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="max-w-4xl mx-auto relative z-10"
				>
					<motion.h1
						className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
						whileHover={{ scale: 1.02 }}
					>
						Halo, Saya Rafi
					</motion.h1>
					<motion.p
						className="text-lg sm:text-xl mt-6 max-w-2xl mx-auto text-muted-foreground"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 1 }}
					>
						Seorang pengembang web & mobile yang suka membangun sesuatu yang menarik dan
						bermanfaat.
					</motion.p>
					<motion.div
						className="mt-10 flex justify-center gap-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6, duration: 1 }}
					>
						<motion.button
							onClick={() =>
								document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
							}
							className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-primary/30 transition-all relative overflow-hidden group"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="relative z-10 flex items-center gap-2">
								Lihat Proyek{' '}
								<MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
							</span>
							<span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
						</motion.button>
						<motion.button
							onClick={() =>
								document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
							}
							className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-all group relative overflow-hidden"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="relative z-10">Hubungi Saya</span>
							<span className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors duration-300"></span>
						</motion.button>
					</motion.div>
				</motion.div>

				<motion.div
					className="mt-20 flex gap-6 relative z-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9, duration: 1 }}
				>
					{[
						{ icon: <Github className="h-6 w-6" />, url: 'https://github.com/rafifauzan29', text: 'GitHub' },
						{ icon: <Linkedin className="h-6 w-6" />, url: 'https://linkedin.com', text: 'LinkedIn' },
						{ icon: <Twitter className="h-6 w-6" />, url: 'https://twitter.com', text: 'Twitter' },
						{ icon: <Mail className="h-6 w-6" />, url: 'mailto:contact@example.com', text: 'Email' },
					].map((social, index) => (
						<motion.a
							key={index}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all relative group"
							whileHover={{ y: -5 }}
							whileTap={{ scale: 0.9 }}
						>
							{social.icon}
							<span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
								{social.text}
							</span>
						</motion.a>
					))}
				</motion.div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background/80 relative"
			>
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true, margin: '-100px' }}
					className="max-w-6xl mx-auto"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
						Tentang <span className="text-primary">Saya</span>
					</h2>
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="relative group"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
							<div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl p-1 transition-all duration-500 group-hover:p-1.5">
								<div className="bg-background rounded-2xl p-4 h-full overflow-hidden">
									<div className="aspect-square bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl flex items-center justify-center">
										<div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
											RF
										</div>
									</div>
								</div>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<p className="text-lg leading-relaxed text-muted-foreground">
								Halo! Saya{' '}
								<span className="font-semibold text-primary">Rafi Fauzan</span>, seorang
								pengembang full-stack dengan pengalaman di berbagai platform termasuk web,
								mobile, dan desktop. Saya senang menciptakan antarmuka pengguna yang elegan
								dan responsif, membangun sistem backend yang kuat, dan mengeksplorasi sistem
								jaringan.
							</p>
							<p className="text-lg leading-relaxed text-muted-foreground mt-4">
								Saya telah mengembangkan dengan teknologi seperti Laravel, Next.js, Flutter,
								NetBeans, dan lainnya. Saya juga tersertifikasi di bidang jaringan komputer
								(CCNA, SRWE, ENSA) dari Cisco NetAcad.
							</p>
							<div className="mt-6 flex flex-wrap gap-2">
								{['Full-stack Developer', 'UI/UX Enthusiast', 'Network Specialist'].map(
									(item, index) => (
										<motion.span
											key={index}
											className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
											whileHover={{
												scale: 1.05,
												backgroundColor: 'rgba(99, 102, 241, 0.2)',
											}}
										>
											{item}
										</motion.span>
									)
								)}
							</div>
						</motion.div>
					</div>
				</motion.div>
			</section>

			{/* Skills Section */}
			<section
				id="skills"
				className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 relative overflow-hidden"
			>
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
					{[...Array(10)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute rounded-full bg-primary/5"
							initial={{
								x: Math.random() * 100 - 50,
								y: Math.random() * 100 - 50,
								width: Math.random() * 300 + 100,
								height: Math.random() * 300 + 100,
								opacity: 0.1,
							}}
							animate={{
								x: Math.random() * 200 - 100,
								y: Math.random() * 200 - 100,
								transition: {
									duration: Math.random() * 20 + 10,
									repeat: Infinity,
									repeatType: 'reverse',
								},
							}}
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true, margin: '-100px' }}
					className="max-w-6xl mx-auto"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
						<span className="text-primary">Keahlian</span> & Teknologi
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{Object.entries(skills).map(([category, items], index) => (
							<motion.div
								key={category}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-muted-foreground/10 hover:border-primary/20"
								whileHover={{ y: -5 }}
							>
								<h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
									<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
									{category}
								</h3>
								<div className="flex flex-wrap gap-2">
									{items.map((item) => (
										<motion.span
											key={item}
											className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
											whileHover={{ scale: 1.05 }}
										>
											{item}
										</motion.span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* Projects Section */}
			<section
				id="projects"
				className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background/80 relative"
			>
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true, margin: '-100px' }}
					className="max-w-7xl mx-auto"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
						<span className="text-primary">Proyek</span> Terbaru
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="group"
							>
								<div className="bg-muted rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-muted-foreground/10 hover:border-primary/20">
									<div className="relative h-48 overflow-hidden">
										<motion.div
											className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
											initial={{ opacity: 0 }}
											whileHover={{ opacity: 1 }}
										/>
										<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 flex items-center justify-center">
											<div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
												{project.name.split(' ').map((word) => word[0]).join('')}
											</div>
										</div>
									</div>
									<div className="p-6 flex-1 flex flex-col">
										<h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
											{project.name}
											<ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
										</h3>
										<p className="text-sm text-muted-foreground mt-2 flex-1">
											{project.description}
										</p>
										<div className="mt-4 flex flex-wrap gap-2">
											{project.tech.map((tech, i) => (
												<motion.span
													key={i}
													className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
													whileHover={{ scale: 1.05 }}
												>
													{tech}
												</motion.span>
											))}
										</div>
										<motion.a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline group/link"
											whileHover={{ x: 5 }}
										>
											Lihat Proyek
											<svg
												className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M14 5l7 7m0 0l-7 7m7-7H3"
												/>
											</svg>
										</motion.a>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 relative overflow-hidden"
			>
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
					{[...Array(10)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute rounded-full bg-primary/5"
							initial={{
								x: Math.random() * 100 - 50,
								y: Math.random() * 100 - 50,
								width: Math.random() * 300 + 100,
								height: Math.random() * 300 + 100,
								opacity: 0.1,
							}}
							animate={{
								x: Math.random() * 200 - 100,
								y: Math.random() * 200 - 100,
								transition: {
									duration: Math.random() * 20 + 10,
									repeat: Infinity,
									repeatType: 'reverse',
								},
							}}
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true, margin: '-100px' }}
					className="max-w-2xl mx-auto"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
						<span className="text-primary">Hubungi</span> Saya
					</h2>

					<div className="bg-background rounded-2xl p-6 shadow-sm border border-muted-foreground/10 hover:border-primary/20 transition-colors">
						<p className="text-muted-foreground text-center mb-8">
							Tertarik bekerja sama atau memiliki pertanyaan? Kirim pesan dan saya akan
							membalas secepat mungkin.
						</p>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-1">
									Nama
								</label>
								<motion.input
									id="name"
									name="name"
									type="text"
									value={contactForm.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
									whileFocus={{ scale: 1.01 }}
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-1">
									Email
								</label>
								<motion.input
									id="email"
									name="email"
									type="email"
									value={contactForm.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
									whileFocus={{ scale: 1.01 }}
								/>
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-1">
									Pesan
								</label>
								<motion.textarea
									id="message"
									name="message"
									rows={5}
									value={contactForm.message}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
									whileFocus={{ scale: 1.01 }}
								></motion.textarea>
							</div>
							<motion.button
								type="submit"
								className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg hover:shadow-primary/30 transition-all relative overflow-hidden group"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<span className="relative z-10">Kirim Pesan</span>
								<span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							</motion.button>
						</form>
					</div>
				</motion.div>
			</section>
		</>
	)
}